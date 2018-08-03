import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { IndexedDbService, UserModel } from '../../services/indexed-db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  rForm: FormGroup;
  isSuccess: boolean = false;

  constructor( private route: ActivatedRoute, private router: Router, private dbService : IndexedDbService, fb : FormBuilder) {
    this.rForm = fb.group({
      'firstName' : [null],
      'lastName': [null],
      'role' : [null],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(3)]],
    });
   }

  signUp():void{
     this.dbService.addObject("users", this.rForm.value);
     this.isSuccess = true;
    }


  ngOnInit() {
    
  }
}
