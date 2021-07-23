import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private injector : Injector) { }
  
  intercept(req, next) {
    let sessionService = this.injector.get(SessionService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionService.getToken()}` 
      }
    })
    return next.handle(tokenizedReq)
  }
}
