import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { IndexedDbService } from '../../services/indexed-db.service';
import { allResolved } from 'q';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private dbService : IndexedDbService) { }

  validEmail: boolean = true;
  validPwd: boolean = true;

<<<<<<< HEAD
  isValid: string;
  isSuccess: boolean = false;
=======
  r = [];
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74

  signUp(firstName, lastName, role, email, pwd):void{
    email.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') ? this.validEmail = true : this.validEmail = false;
    pwd.value == '' ? this.validPwd = false : this.validPwd = true;

    if (this.validEmail == true || this.validPwd == true){
      this.dbService.addObject("users", { firstName: firstName.value, lastName: lastName.value, role: role.value, email: email.value, pwd: pwd.value});
<<<<<<< HEAD
      this.isSuccess = true;
    }else{
      this.isValid = 'Something wrong';
=======
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74
    }
  };

  ngOnInit() {
    
  }
}
