import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/core/config/route/endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS


  constructor(
    private httpClient: HttpClient
  ) { }

  updateProfile(requestData){
    console.log(requestData);
    
    console.log(this.baseUrl + this.endpoint.PROFILE.UPDATE)
    return this.httpClient.post<any>(this.baseUrl + this.endpoint.PROFILE.UPDATE, requestData)
  }

  updateProfilePicture(requestData){
    console.log(requestData);
    
    console.log(this.baseUrl + this.endpoint.PROFILE.UPDATE_PICTURE)
    return this.httpClient.post<any>(this.baseUrl + this.endpoint.PROFILE.UPDATE_PICTURE, requestData)
  }
}
