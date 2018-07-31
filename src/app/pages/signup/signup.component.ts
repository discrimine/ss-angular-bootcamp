import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { IndexedDbService } from '../../services/indexed-db.service';
import { AddUserAutoIncrementService } from '../../services/add-user-auto-increment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private dbService : IndexedDbService, private autoInc: AddUserAutoIncrementService ) { }

  validEmail: boolean = true;
  validPwd: boolean = true;

  signUp(firstName, lastName, role, email, pwd):void{
    // email.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') ? this.validEmail = true : this.validEmail = false;
    // pwd.value == '' ? this.validPwd = false : this.validPwd = true;

    if (this.validEmail == true || this.validPwd == true){
      console.log( this.autoInc.getId("users", 10) );
      this.dbService.addObject("users", { id: 10, firstName: firstName.value, lastName: lastName.value, role: role.value, email: email.value, pwd: pwd.value});
    }
    
  };

  ngOnInit() {
    
  }
}
