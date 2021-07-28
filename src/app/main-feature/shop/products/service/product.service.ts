import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/core/config/route/endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = environment.baseUrl
  endpoint = APIS

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllProduct(requestData) {
    return new Observable<any>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.PRODUCT.ALL, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.product().subscribe((res) => {
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

  addProduct(requestData) {
    return new Observable<any>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.PRODUCT.ADD, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.product().subscribe((res) => {
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

  updateProduct(requestData) {
    return new Observable<any>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.PRODUCT.UPDATE, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.product().subscribe((res) => {
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
  deleteProduct(requestData) {
    return new Observable<any>(observer => {
      this.httpClient.post<any>(this.baseUrl + this.endpoint.PRODUCT.DELETE, requestData).subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          this.product().subscribe((res) => {
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

  product() {
    return new Observable<any>()
  }

}
