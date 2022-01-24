import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  routeURL: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertSerivce: AlertService
  ) {
    this.routeURL = this.router.url
   }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    console.log(this.authService.isLoggedIn)

    return new Promise((resolve, reject) => {
      if(this.authService.getLogin() == false && this.routeURL != '/login') {

        this.routeURL = '/login'

        this.router.navigate(['/login'], {
          queryParams: {
            return: 'login'
          }
        })
        this.alertSerivce.showAlert('Error', "You need to be logged in to access this web page!", "error", false)
        return resolve(false)
      } else {
        this.routeURL = this.router.url
        return resolve(true)
      }
    })
  }
}
