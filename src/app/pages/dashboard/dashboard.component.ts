import { Component, OnInit } from '@angular/core';

import { CurrentUserService } from '../../services/current-user.service';
import { MainMenuComponent } from '../../main-menu/main-menu.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: ''
})
export class DashboardComponent implements OnInit {

  constructor(private CurrentUserService: CurrentUserService) { }

  ngOnInit() {
    
  }

}
