import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) { }

  validName: boolean = true;
  validLogin: boolean = true;
  validEmail: boolean = true;
  validPwd: boolean = true;

  signUp(name, login, email, pwd):void{
    name.value == '' ? this.validName = false : this.validName = true;
    login.value == '' ? this.validLogin = false : this.validLogin = true;
    email.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$') ? this.validEmail = true : this.validEmail = false;
    pwd.value == '' ? this.validPwd = false : this.validPwd = true;

    if (this.validName == true || this.validLogin == true || this.validEmail == true || this.validPwd == true){
      let user = {
        UserName: name.value,
        UserLogin: login.value,
        UserEmail: email.value,
        UserPwd: pwd.value
      }
      let serialUser = JSON.stringify(user);
      localStorage.setItem("RegisteredUser", serialUser);
      this.router.navigate(['dashboard']);
    }
    
  };

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("RegisteredUser")))
  }
}
