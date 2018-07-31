import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

import { AppComponent } from '../app.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class RouteRoutingModule { }
