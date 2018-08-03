import { Component, OnInit } from '@angular/core';
import { IsAuthService } from '../../services/is-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private isAuthService: IsAuthService) { }
  user;
  isUserAuth = this.isAuthService.isAuth();
 
  ngOnInit() {
    if ( this.isUserAuth ){
      this.user = JSON.parse(localStorage.getItem("user"));
      }
  }

}
