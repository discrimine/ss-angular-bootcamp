import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }

  authd_user = JSON.parse(localStorage.getItem("RegisteredUser"));

}
