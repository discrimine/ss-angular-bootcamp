import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsAuthService } from '../is-auth.service'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ IsAuthService ]
})
export class MainMenuComponent implements OnInit {

  constructor( private isAuthService: IsAuthService ) { }

  isDash: boolean = false;
  isAuth: string = '123';

  auth_menu(){
    if (this.isAuthService.isAuthdUser()){
      this.isAuth = 'Dashboard'; 
    }else{
      this.isAuth = 'Auth'
    }
  }

  ngOnInit() {
    this.auth_menu();
    
  }

}
