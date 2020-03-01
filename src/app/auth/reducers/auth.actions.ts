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

export const signInFailure = createAction('[Sign In Page] Sign In Failure');

export const signUp = createAction(
  '[Sign Up Page] Sign Up',
  props<{ payload: { form: fromAuthModel.SignUpForm } }>()
);

export const signUpSuccess = createAction('[Auth Effect] Sign Up Success');

export const signUpFailure = createAction(
  '[Auth Effect] Sign Up Failure',
  props<{ payload: { response: fromCoreModel.ApiGenericClientErrorResponse } }>()
);

export const getUserProfile = createAction(
  '[Auth Effect] Get User Profile',
  props<{ id: number }>()
);

export const getUserProfileSuccess = createAction(
  '[Auth Effect] Get user profile success',
  props<{user: fromCoreModel.User}>()
);

export const getUserProfileFailure = createAction('[AuthEffect] Get user profile failure');

export const signOut = createAction(
  '[Top Menu] Sign Out'
);
