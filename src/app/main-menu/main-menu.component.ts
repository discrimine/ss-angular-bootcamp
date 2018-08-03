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
  isUserAuth = (this.isAuth) ? 'logout' : 'signin';

  ngOnInit() {

  }

}
