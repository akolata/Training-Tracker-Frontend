import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromCoreServices from '../../core/services';
import {AuthActions} from './auth-action-types';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromAuthModel from '../model';
import {signInFailure, signInSuccess, signUpFailure, signUpSuccess} from './auth.actions';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.signIn),
        map(action => {
          const request: fromAuthModel.SignInRequest = action.payload.form;
          return request;
        }),
        switchMap(request => this.authService.signIn(request)
          .pipe(
            map((response: fromAuthModel.SignInResponse) => signInSuccess({payload: {response}})),
            catchError(() => of(signInFailure({})))
          )
        )
      ));

  signInSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInSuccess),
      map(action => action.payload.response),
      tap(response => this.authService.saveToken(response.accessToken)),
      tap(() => this.router.navigateByUrl('/user'))
    ), {dispatch: false});

  signUp$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.signUp),
        map(action => {
          const request: fromAuthModel.SignUpRequest = action.payload.form;
          return request;
        }),
        switchMap(request => this.authService.signUp(request)
          .pipe(
            map(response => signUpSuccess({})),
            catchError((errorResponse: HttpErrorResponse) => {
              if (errorResponse.error.hasOwnProperty('errors')) {
                const firstError = Object.keys(errorResponse.error.errors)[0];
                const errorMsg = errorResponse.error.errors[firstError][0];
                return of(signUpFailure({payload: {response: {errorMsg}}}));
              } else {
                return of(signUpFailure({payload: {response: errorResponse.error}}));
              }
            })
          )
        )
      )
  );

  signUpSuccess$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.signUpSuccess),
          tap(() => this.router.navigateByUrl('/sign-in')),
          tap(() => this.snackBar.open('Sign up successful. Now You can sign in.', 'Close', {
            duration: 10_000
          }))
        )
    , {dispatch: false});

  constructor(
    private actions$: Actions,
    private authService: fromCoreServices.AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

}
