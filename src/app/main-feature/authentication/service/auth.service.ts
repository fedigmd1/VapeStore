import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/auth';
import { environment } from 'src/environments/environment';
import { APIS } from 'src/app/core/config/route/endpoint'
import { Router } from '@angular/router';
import { ROUTE } from 'src/app/core/config/route/route';
import { LoaderComponent } from 'src/app/shared/common/loader/loader.component';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS

  constructor(
    private router: Router,
    private loader: LoaderService,
    private httpClient: HttpClient,
  ) { }

  login(requestData) {
    return new Observable<User>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.AUTH.LOGIN, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.getUserInfo().subscribe((res) => {
            if (res) {
              localStorage.setItem('userDetail', JSON.stringify(res))
              observer.next(res)
            }
          })
        }
      },
        error => observer.error(error))
    })
  }

  register(requestData) {
    return new Observable<User>(observer => {
      return this.httpClient.post<any>(this.baseUrl + this.endpoint.AUTH.REGISTER, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.getUserInfo().subscribe((res) => {
            localStorage.setItem('userDetail', JSON.stringify(res))
            if (res) observer.next(res)
          })
        }
      },
        error => observer.error(error))
    })
  }

  getUserInfo() {
    return new Observable<User>(observer => {
      this.httpClient.get<User>(this.baseUrl + this.endpoint.AUTH.USER_INFO).subscribe((res) => {
        if (res) {
          observer.next(res)
        }
      },
        error => observer.error(error))
    })
  }

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


}