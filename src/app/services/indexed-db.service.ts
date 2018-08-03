import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

/** Interfaces */
export interface IDataProviderService {
  addCollection(name, records): Promise<any>;
  getObject(name, objectId): Promise<any>;
  getItems(name: string): Promise<any[]>;
  updateObject(name, object): Promise<any>;
  deleteObject(name, object): Promise<any>;
  addObject(name: string, object: any): Promise<any>;
}

/** Base services */
@Injectable({
  providedIn: 'root'
})
export class IndexedDbService implements IDataProviderService {
  constructor() { }

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

  public addCollection(name, records): Promise<any> {
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
          for (let i = 0; i < records.length; i++) {
            store.put({ id: records[i].id, obj: records[i] });
          }
          resolve();
      });
    });
  }

  public getObject(name, objectId): Promise<any> {
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

  public getItems(name: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
        const cursorRequest = store.openCursor();
        const items = [];
        cursorRequest.onerror = function (error) {
          reject(error);
        };
        cursorRequest.onsuccess = function (evt) {
          const cursor = evt.target.result;
          if (cursor) {
            items.push(cursor.value.obj);
            cursor.continue();
          } else {
            resolve(items);
          }
        };
      });
    });
  }

  public updateObject(name, object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
        store.put({ id: object.id, obj: object });
        resolve();
      });
    });
  }

  public deleteObject(name, object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
        store.delete(object.id);
        resolve();
      });
    });
  }

  public addObject(name: string, object: any): Promise<any> {
    let lastId = 0;
    return new Promise((resolve, reject) => {
      this.performOperationWithStore(name, function (tx, store) {
        const cursorRequest = store.openCursor();
        cursorRequest.onerror = function (error) {
          reject(error);
        };
        cursorRequest.onsuccess = function (evt) {
          const cursor = evt.target.result;
          if (cursor) {
            if (cursor.key > lastId) {
              lastId = cursor.key;
            }
            cursor.continue();
          } else {
            object.id = ++lastId;
            store.put({ id: object.id, obj: object });
            resolve(object);
            resolve(lastId);
          }
        };
      });
    });
  }
  
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDataService<T extends BaseModel> {

  constructor(
    private tableName: string,
    protected dataProviderService: IDataProviderService) {
    }

  addCollection(records: T[]): Promise<any> {
    return this.dataProviderService.addCollection(this.tableName, records);
  }
  getObject(objectId: number): Promise<T> {
      return this.dataProviderService.getObject(this.tableName, objectId);
  }
  getItems(): Promise<T[]> {
    return this.dataProviderService.getItems(this.tableName);
  }
  updateObject(record: T): Promise<T[]> {
    return this.dataProviderService.updateObject(this.tableName, record);
  }
  deleteObject(record: T): Promise<T[]> {
    return this.dataProviderService.deleteObject(this.tableName, record);
  }
  addObject(record: T): Promise<T[]> {
    return this.dataProviderService.addObject(this.tableName, record);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseDataService<UserModel> {
  constructor(protected dataProviderService: IndexedDbService) {
    super('MyDataBase', dataProviderService);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DantistsService extends BaseDataService<DantistModel> {
  constructor(protected dataProviderService: IndexedDbService) /*Can Be APIDataProviderService*/ {
    super('dantists', dataProviderService);
  }
}

/** Models */
export class BaseModel {
  id: string;
}

export class UserModel extends BaseModel {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

export class DantistModel extends BaseModel {
}