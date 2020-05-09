import {createSelector} from '@ngrx/store';
import * as fromExercisesReducer from '../reducers';

export const selectExercisesCommonState = createSelector(
  fromExercisesReducer.selectExercisesState,
  (state: fromExercisesReducer.ExercisesState) => state.common
);
export const selectExercisesTypes = createSelector(
  selectExercisesCommonState,
  (state: fromExercisesReducer.CommonExercisesState) => state.types
);
