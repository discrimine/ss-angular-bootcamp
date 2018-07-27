import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

import { AppComponent } from '../app.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { ContactsComponent } from '../pages/contacts/contacts.component'
import { SignupComponent } from '../pages/signup/signup.component'

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: 'landing' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class RouteRoutingModule { }
