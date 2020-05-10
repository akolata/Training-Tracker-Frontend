import {createSelector} from '@ngrx/store';
import {CreateExerciseState, ExercisesState, selectExercisesState} from '../reducers';

export const selectCreateExerciseState = createSelector(
  selectExercisesState,
  (state: ExercisesState) => state.createExercise
);
export const selectExerciseCreationPending = createSelector(
  selectCreateExerciseState,
  (state: CreateExerciseState) => state.createExercisePending
);
export const selectCreateExerciseErrorMsg = createSelector(
  selectCreateExerciseState,
  (state: CreateExerciseState) => state.errorMsg
);
