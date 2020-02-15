import {createAction, props} from '@ngrx/store';
import * as fromAuthModel from '../model';
import * as fromCoreModel from '@app/core/model';

export const signIn = createAction(
  '[Sign In Page] Sign In',
  props<{ payload: { form: fromAuthModel.SignInForm } }>()
);

export const signInSuccess = createAction(
  '[Sign In Page] Sign In Success',
  props<{ payload: { response: fromAuthModel.SignInResponse } }>()
);

export const signInFailure = createAction(
  '[Sign In Page] Sign In Failure',
  props()
);

export const signUp = createAction(
  '[Sign Up Page] Sign Up',
  props<{ payload: { form: fromAuthModel.SignUpForm } }>()
);

export const signUpSuccess = createAction(
  '[Sign Up Page] Sign Up Success',
  props()
);

export const signUpFailure = createAction(
  '[Sign Up Page] Sign Up Failure',
  props<{ payload: { response: fromCoreModel.ApiGenericClientErrorResponse } }>()
);

export const getUserProfile = createAction(
  '[Sign In Page] Get User Profile',
  props<{ payload: { user: fromAuthModel.User } }>()
);

export const signOut = createAction(
  '[Top Menu] Sign Out'
);
