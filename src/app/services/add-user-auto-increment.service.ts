import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserAutoIncrementService {

  private performOperationWithStore(name: string, useStoreFunc: (tx: any, store: any) => any): void {
    const indexedDB = window.indexedDB;
    // Open (or create) the database
    const open = indexedDB.open('MyDataBase', 1);
      open.onupgradeneeded = function () {
      const db = open.result;
      db.createObjectStore('users', { keyPath: 'id' });
    };
    open.onsuccess = function () {
      // Start a new transaction
      const db = open.result;
      const tx = db.transaction(name, 'readwrite');
      const store = tx.objectStore(name);
      useStoreFunc(tx, store);
      // Close the db when the transaction is done
      tx.oncomplete = function () {
        db.close();
      };
    };
  }

  public getId(name, objectId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
        const cursorRequest = store.openCursor();
        let result = {};
        cursorRequest.onerror = function (error) {
          reject(error);
        };
        cursorRequest.onsuccess = function (evt) {
          const cursor = evt.target.result;
          if (cursor) {
            if (cursor.key === objectId) {
              result = cursor.value.obj;
            }
            cursor.continue();
          } else {
            resolve(result);
          }
        };
      });
    });
  }


  constructor() { }
}
