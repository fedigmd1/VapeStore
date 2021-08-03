import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/core/config/route/endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS

  constructor( private httpClient: HttpClient) { }


  addPost(requestData) {
    return this.httpClient.post(this.baseUrl + this.endpoint.MARKET_PLACE.ADD_POST,requestData)
  }

  deletePost(requestData) {
    return this.httpClient.post(this.baseUrl + this.endpoint.MARKET_PLACE.DELETE_POST,requestData)
  }
}
