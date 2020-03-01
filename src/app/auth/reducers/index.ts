import {createReducer, on} from '@ngrx/store';
import * as fromCoreModel from '@tt-core/model';
import {AuthActions} from './auth-action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user?: fromCoreModel.User;
  signInFailureErrorMsg?: string;
  signUpFailureErrorMsg?: string;
}

export const initialAuthState: AuthState = {};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.signInFailure, state => ({...state, signInFailureErrorMsg: 'Username or password is invalid'})),
  on(AuthActions.signInSuccess, state => ({...state, signInFailureErrorMsg: undefined})),
  on(AuthActions.signUpFailure, (state, {payload}) => ({...state, signUpFailureErrorMsg: payload.response.errorMsg})),
  on(AuthActions.signUpSuccess, state => ({...state, signUpFailureErrorMsg: undefined})),
  on(AuthActions.getUserProfileSuccess, (state, {user}) => ({...state, user})),
  on(AuthActions.getUserProfileFailure, state => ({...state, user: undefined}))
);

export function reducer(state, action) {
  return authReducer(state, action);
}

export * from './auth.actions';
export * from './auth-action-types';
export * from './auth.selector';
export * from './auth.effects';
