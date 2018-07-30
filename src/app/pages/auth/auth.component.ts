import { Component, OnInit } from '@angular/core';
import { Clients } from '../../data/clients-info';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent implements OnInit {

  user: boolean;

  constructor() { }

  client: Clients = {
    id: 1,
    name: 'jack'
  }

  auth(userName):void{
   
  }

  ngOnInit() {
  }

}
