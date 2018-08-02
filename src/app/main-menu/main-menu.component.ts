import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsAuthService } from '../services/is-auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ ]
})
export class MainMenuComponent implements OnInit {

  constructor( private isAuthService: IsAuthService ) { }

  isAuth = this.isAuthService.isAuth()
<<<<<<< HEAD
  isUserAuth = (this.isAuth) ? 'logout' : 'signin';

  ngOnInit() {
    console.log(this.isAuth);
=======

  dashboard = (this.isAuth) ? 'Log out' : 'Sign in';

  
 

  ngOnInit() {
    console.log(this.isAuth);
    
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74
  }

}
