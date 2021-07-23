import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sessionService: SessionService,
    private route: Router) {

  }
  previousUrl: string;

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.sessionService.loggedIn()) {
        return true
      } else {
        this.route.navigate(['/auth/login'])
        return false
      }
    }
}
