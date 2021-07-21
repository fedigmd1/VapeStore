import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationMainComponent } from './authentication-main/authentication-main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: AuthenticationMainComponent, children: [

      {
        path: 'login', component: SignInComponent
      },
      {
        path: 'register', component: SignUpComponent
      }

    ]
  }


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
