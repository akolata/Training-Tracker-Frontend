import {createAction, props} from '@ngrx/store';
import * as fromModel from '../model';

export const signIn = createAction(
  '[Sign In Page] Sign In',
  props<{ payload: { form: fromModel.SignInForm } }>()
);

export const signInSuccess = createAction(
  '[Sign In Page] Sign In Success',
  props<{ payload: { response: fromModel.SignInResponse } }>()
);

export const signInFailure = createAction(
  '[Sign In Page] Sign In Failure',
  props()
);

export const getUserProfile = createAction(
  '[Sign In Page] Get User Profile',
  props<{ payload: { user: fromModel.User } }>()
);

export const signOut = createAction(
  '[Top Menu] Sign Out'
);
