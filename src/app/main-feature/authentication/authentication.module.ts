import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { AuthenticationMainComponent } from './authentication-main/authentication-main.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    AuthenticationMainComponent,
  ],

  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
