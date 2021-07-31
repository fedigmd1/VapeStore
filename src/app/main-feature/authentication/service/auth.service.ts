import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/auth';
import { environment } from 'src/environments/environment';
import { APIS } from 'src/app/core/config/route/endpoint'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(requestData) {
    return new Observable<User>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.AUTH.LOGIN, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.getUserInfo().subscribe((res) => {
            if (res) {
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
          localStorage.setItem('userDetail', JSON.stringify(res))
          observer.next(res)
        }
      },
        error => observer.error(error))
    })
  }



}