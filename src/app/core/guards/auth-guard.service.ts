import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import * as fromServices from '../services/';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: fromServices.AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard canActivate: ', this.authService.isSignedIn());
    return this.authService.isSignedIn();
  }
}
