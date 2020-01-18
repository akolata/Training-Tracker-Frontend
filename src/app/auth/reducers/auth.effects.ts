import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../services';
import {AuthActions} from './auth-action-types';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromAuthModel from '../model';
import {signInFailure, signInSuccess} from './auth.actions';
import {of} from 'rxjs';

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

  constructor(private actions$: Actions, private authService: AuthService) {
  }


}
