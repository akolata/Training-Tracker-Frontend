import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromCoreServices from '../../core/services';
import {AuthActions} from './auth-action-types';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromAuthModel from '../model';
import {signInFailure, signInSuccess} from './auth.actions';
import {of} from 'rxjs';
import {Router} from '@angular/router';


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

  constructor(private actions$: Actions, private authService: fromCoreServices.AuthService, private router: Router) {
  }

}
