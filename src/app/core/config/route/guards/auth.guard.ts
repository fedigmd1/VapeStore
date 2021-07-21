import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../../../main-feature/authentication/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private route: Router) {

  }
  previousUrl: string;

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.loggedIn()) {
        return true
      } else {
        this.route.navigate(['/auth/login'])
        return false
      }
    }
}
