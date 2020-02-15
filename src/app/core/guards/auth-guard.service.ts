import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment} from '@angular/router';
import * as fromServices from '../services/';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: fromServices.AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isSignedIn();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isSignedIn();
  }


}
