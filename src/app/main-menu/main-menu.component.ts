import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor( private isAuthService: IsAuthService ) { }

  isAuth = this.isAuthService.isAuth()
  isUserAuth = (this.isAuth) ? 'logout' : 'signin';

  ngOnInit() {
    console.log(this.isAuth);
  }

}
