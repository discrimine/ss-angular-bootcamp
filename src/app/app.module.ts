import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { RouteRoutingModule } from './route/route-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InputsComponent } from './helpers/inputs/inputs.component';
import { LogoutComponent } from './helpers/logout/logout.component';
import { DantistListComponent } from './pages/dantist-list/dantist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    HomeComponent,
    MainMenuComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    DashboardComponent,
    InputsComponent,
    LogoutComponent,
    DantistListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
