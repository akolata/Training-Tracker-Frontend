import {createSelector} from '@ngrx/store';
import * as fromTrainingsReducer from '../reducer';

export const selectTrainingsState = state => state.trainings;
export const selectBrowseTrainingsFeature = createSelector(
  selectTrainingsState,
  (state: fromTrainingsReducer.TrainingsState) => state.browseTrainings
);
export const selectBrowseTrainingsForm = createSelector(
  selectBrowseTrainingsFeature,
  (state: fromTrainingsReducer.BrowseTrainingsState) => state.form
);
export const selectTrainings = createSelector(
  selectBrowseTrainingsFeature,
  (state: fromTrainingsReducer.BrowseTrainingsState) => state.trainings
);
