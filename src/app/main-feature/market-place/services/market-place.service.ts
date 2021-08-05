import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/core/config/route/endpoint';
import { Post } from 'src/app/core/models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS
  postList: Post[]

  constructor( private httpClient: HttpClient) { }

  getAllPosts() {
    return new Observable<Post[]>(observer => {
      return this.httpClient.get<Post[]>(this.baseUrl + this.endpoint.MARKET_PLACE.ALL_POSTS).subscribe((res) => {
        if (res) {
          console.log(res);
          this.postList = res.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
          observer.next(this.postList)
        }
      },
        error => observer.error(error))
    })
  }
  addPost(requestData) { 
    return this.httpClient.post(this.baseUrl + this.endpoint.MARKET_PLACE.ADD_POST,requestData)
  }

  deletePost(requestData) {
    return this.httpClient.post(this.baseUrl + this.endpoint.MARKET_PLACE.DELETE_POST,requestData)
  }
  
  updatePost(requestData) { 
  return this.httpClient.post(this.baseUrl + this.endpoint.MARKET_PLACE.UPDATE_POST,requestData)
  }
}
