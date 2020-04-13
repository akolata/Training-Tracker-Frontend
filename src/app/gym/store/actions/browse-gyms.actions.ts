import {createAction, props} from '@ngrx/store';
import * as fromCoreModels from '@tt-core/model';
import * as fromGymModels from '../../models';

export const setBrowseGymsForm = createAction(
  '[BROWSE GYMS FORM] Set form',
  props<{ form: fromGymModels.BrowseGymsForm }>()
);
export const searchGyms = createAction(
  '[BROWSE GYMS FORM] Search gyms'
);
export const searchGymsSuccess = createAction(
  '[BROWSE GYMS EFFECT] Search gyms success',
  props<{ gyms: fromCoreModels.Gym[] }>()
);
export const searchGymsFailure = createAction(
  '[BROWSE GYMS EFFECT] Search gyms failure',
);
