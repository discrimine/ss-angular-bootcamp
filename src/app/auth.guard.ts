import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IsAuthService } from './is-auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor( private route: ActivatedRoute, private router: Router, private isAuthd: IsAuthService  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let authd_user = JSON.parse(localStorage.getItem("RegisteredUser"));
    if (authd_user != null){
      return true
    }else{
      this.router.navigate[('signup')];
    }
  }
}
