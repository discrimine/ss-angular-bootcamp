import { Component, OnInit } from '@angular/core';
import { IsAuthService } from '../../services/is-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private isAuthService: IsAuthService) { }
  authdUser;
  userName: string;
  isUserAuth = this.isAuthService.isAuth();
 
    

  ngOnInit() {
    if ( this.isUserAuth ){
      this.authdUser = JSON.parse(localStorage.getItem("user"));
      this.userName = this.authdUser.firstName;
      }
  }

}
