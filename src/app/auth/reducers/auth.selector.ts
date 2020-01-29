import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './index';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectSignInError = createSelector(
  selectAuthState,
  authState => authState.signInFailureErrorMsg
);

export const selectUser = createSelector(
  selectAuthState,
  authState => authState.user
);
