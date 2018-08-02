import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor() { }

  isAuthdUser(){
    let authd_user = JSON.parse(localStorage.getItem("RegisteredUser"));
    if  ( authd_user != null ){
      return true
    }
    return false
  }

  

}
