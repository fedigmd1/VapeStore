import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/core/config/route/endpoint';
import { User } from 'src/app/core/models/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../authentication/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS


  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  updateProfile(requestData){
    return new Observable<User>(observer => {
      return this.httpClient.post<any>(this.baseUrl + this.endpoint.PROFILE.UPDATE, requestData)
      .subscribe((res) => {
        if (res) {
          this.authService.getUserInfo().subscribe((res) => {
            if (res) observer.next(res)
          })
        }
      },
        error => observer.error(error))
    })
  }

  updateProfilePicture(requestData){
    console.log(requestData);
    
    console.log(this.baseUrl + this.endpoint.PROFILE.UPDATE_PICTURE)
    return this.httpClient.post<any>(this.baseUrl + this.endpoint.PROFILE.UPDATE_PICTURE, requestData)
  }
}
