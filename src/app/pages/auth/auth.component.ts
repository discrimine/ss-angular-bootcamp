import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IndexedDbService } from '../../services/indexed-db.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent implements OnInit {

  user: boolean;

  constructor( private dbService: IndexedDbService, private router: Router ) { }

  validEmail: boolean = true;
  validPwd: boolean = true;
  isValid: string;

  signIp(email, pwd):void{
    email.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') ? this.validEmail = true : this.validEmail = false;
    pwd.value == '' ? this.validPwd = false : this.validPwd = true;

    if (this.validEmail == true || this.validPwd == true){
      this.dbService.getItems("users").then(function(Response){
        for( let i = 0; i <= Response.length-1; i++){
          if (Response[i].email == email.value && Response[i].pwd == pwd.value){
            localStorage.setItem('user' , JSON.stringify(Response[i]));
            window.location.reload();
          }
        }
      });
    }else{
      this.isValid='User not found';
    }
  };

  ngOnInit() {
  }

}
