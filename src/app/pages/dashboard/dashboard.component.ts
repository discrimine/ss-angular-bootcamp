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
<<<<<<< HEAD
  userName: string;
  isUserAuth = this.isAuthService.isAuth();
=======
  userName;
  z = this.isAuthService.isAuth();
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74
 
    

  ngOnInit() {
<<<<<<< HEAD
    if ( this.isUserAuth ){
=======
    if ( this.z ){
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74
      this.authdUser = JSON.parse(localStorage.getItem("user"));
      this.userName = this.authdUser.firstName;
      }
  }

}
