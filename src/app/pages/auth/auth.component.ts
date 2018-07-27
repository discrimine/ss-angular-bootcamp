import { Component, OnInit } from '@angular/core';
import { Clients } from '../../data/clients-info';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent implements OnInit {

  client: Clients = {
    id: 1,
    name: 'jack'
  }

  auth():void{
    console.log('success');
  }

  constructor() { }

  ngOnInit() {
  }

}
