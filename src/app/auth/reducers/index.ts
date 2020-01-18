import {createReducer, on} from '@ngrx/store';
import * as fromAuthModel from '../model';
import {AuthActions} from './auth-action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user?: fromAuthModel.User;
  signInFailureErrorMsg?: string;
}

export const initialAuthState: AuthState = {};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.signInFailure, state => ({...state, signInFailureErrorMsg: 'Username or password is invalid'})),
  on(AuthActions.signInSuccess, state => ({...state, signInFailureErrorMsg: undefined}))
);

export * from './auth.actions';
export * from './auth-action-types';
export * from './auth.selector';
