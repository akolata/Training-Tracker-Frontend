import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {noop, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from "@angular/core";

import * as fromServices from '../services';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: fromServices.AuthService) {
  }

  private handleErrorResponse(err: any): void {
    if (AuthErrorInterceptor.isUnauthorized(err) && AuthErrorInterceptor.isPathProtected(err.url)) {
      this.authService.removeToken();
      this.router.navigateByUrl('/unathorized');
    }
    if (AuthErrorInterceptor.isForbidden(err) && AuthErrorInterceptor.isPathProtected(err.url)) {
      this.router.navigateByUrl('/unauhtorized');
    }
  }

  private static isUnauthorized(err: any): boolean {
    return err instanceof HttpErrorResponse && err.status === 401;
  }

  private static isForbidden(err: any): boolean {
    return err instanceof HttpErrorResponse && err.status === 403;
  }

  private static isPathProtected(url: string): boolean {
    return url && url.indexOf('/auth/sign-up') === -1 && url.indexOf('/auth/sign-in') === -1;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap(
          noop,
          (err: any) => this.handleErrorResponse(err)
        )
      );
  }
}
