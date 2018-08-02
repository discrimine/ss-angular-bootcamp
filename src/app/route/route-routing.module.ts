import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

import { AppComponent } from '../app.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LogoutComponent } from '../helpers/logout/logout.component'
<<<<<<< HEAD
import { DantistListComponent } from '../pages/dantist-list/dantist-list.component';
=======
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74

import { IsAuthGuard } from '../guards/is-auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
<<<<<<< HEAD
  { path: 'signin', component: AuthComponent, canActivate: [IsAuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'dentists', component : DantistListComponent},
=======
  { path: 'Sign in', component: AuthComponent, canActivate: [IsAuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Log out', component: LogoutComponent},
>>>>>>> 0bbb1f44a4d6fd8db1252abac252f133f7372b74
  { path: '**', redirectTo: 'landing' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [IsAuthGuard]
})
export class RouteRoutingModule { }
