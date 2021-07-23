import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from 'src/app/core/config/route/route';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router,
    private loader: LoaderService) { };

    loggedIn() {
    if (!!localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    this.loader.showSpinner()
    localStorage.removeItem('token')
    localStorage.removeItem('userDetail')
    setTimeout(() => {
      this.router.navigate([ROUTE.LOGIN])
      this.loader.stopSpinner()
    }, 2000);
  }
  getUserDetails(){
    return localStorage.getItem('userDetail')
  }

}
