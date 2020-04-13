import {createSelector} from '@ngrx/store';
import * as fromGymReducer from '../reducer'

export const selectGymsState = state => state.gym;
export const selectBrowseGymsState = createSelector(
  selectGymsState,
  (state: fromGymReducer.GymState) => state.browseGyms
);
export const selectBrowseGymsForm = createSelector(
  selectBrowseGymsState,
  (state: fromGymReducer.BrowseGymsState) => state.form
);
