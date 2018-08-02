import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { RouteRoutingModule } from './route/route-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';

import { FormsModule } from '@angular/forms'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';

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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouteRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
