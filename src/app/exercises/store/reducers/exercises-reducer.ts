import {Action, createReducer, on} from '@ngrx/store';
import * as fromCoreModels from '@tt-core/model';
import * as fromExercisesActions from '../actions';

export interface CommonExercisesState {
  types: fromCoreModels.ExerciseType[];
}

export const initialExercisesState: CommonExercisesState = {
  types: []
};

export const exercisesReducer = createReducer(
  initialExercisesState,
  on(fromExercisesActions.ExercisesActions.setExercisesTypes, (state, {types}) => ({
    ...state,
    types
  }))
);

export function exercisesReducerFn(state: CommonExercisesState, action: Action) {
  return exercisesReducer(state, action);
}

export const EXERCISES_STORE_FEATURE = 'exercises';
export const selectExercisesState = state => state[EXERCISES_STORE_FEATURE];
