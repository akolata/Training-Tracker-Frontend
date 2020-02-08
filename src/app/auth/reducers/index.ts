import {createReducer, on} from '@ngrx/store';
import * as fromAuthModel from '../model';
import {AuthActions} from './auth-action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user?: fromAuthModel.User;
  signInFailureErrorMsg?: string;
  signUpFailureErrorMsg?: string;
}

export const initialAuthState: AuthState = {};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.signInFailure, state => ({...state, signInFailureErrorMsg: 'Username or password is invalid'})),
  on(AuthActions.signInSuccess, state => ({...state, signInFailureErrorMsg: undefined})),
  on(AuthActions.signUpFailure, (state, {payload}) => ({...state, signUpFailureErrorMsg: payload.response.errorMsg})),
  on(AuthActions.signUpSuccess, state => ({...state, signUpFailureErrorMsg: undefined}))
);

export * from './auth.actions';
export * from './auth-action-types';
export * from './auth.selector';
export * from './auth.effects';
