import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private dbService : IndexedDbService) { }

  validEmail: boolean = true;
  validPwd: boolean = true;

  isValid: string;
  isSuccess: boolean = false;

  signUp(firstName, lastName, role, email, pwd):void{
    email.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') ? this.validEmail = true : this.validEmail = false;
    pwd.value == '' ? this.validPwd = false : this.validPwd = true;

    if (this.validEmail == true || this.validPwd == true){
      this.dbService.addObject("users", { firstName: firstName.value, lastName: lastName.value, role: role.value, email: email.value, pwd: pwd.value});
      this.isSuccess = true;
    }else{
      this.isValid = 'Something wrong';
    }
  };

  ngOnInit() {
  }

}
