import {createAction, props} from '@ngrx/store';
import * as fromCoreModels from '@tt-core/model';
import * as fromSharedModels from '@tt-shared/model';
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
export const setBrowseGymsTableState = createAction(
  '[BROWSE GYMS TABLE] Set table state',
  props<{ tableState: fromSharedModels.TableState }>()
);
export const setBrowseGymsPaginationState = createAction(
  '[BROWSE GYMS TABLE] Set pagination state',
  props<{ paginationState: fromSharedModels.PaginationState }>()
);
