import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  isAuth(){
    if (localStorage.getItem("user") != null){
      return true
    }else{
      return false
    }
  }

  constructor() { }
}
