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
export const selectGyms = createSelector(
  selectBrowseGymsState,
  (state: fromGymReducer.BrowseGymsState) => state.gyms
);
export const selectIsLoading = createSelector(
  selectBrowseGymsState,
  (state: fromGymReducer.BrowseGymsState) => state.isLoading
);
export const selectBrowseGymsPaginationState = createSelector(
  selectBrowseGymsState,
  (state: fromGymReducer.BrowseGymsState) => state.paginationState
);
export const selectBrowseGymsTableState = createSelector(
  selectBrowseGymsState,
  (state: fromGymReducer.BrowseGymsState) => state.tableState
);
