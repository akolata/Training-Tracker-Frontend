import {ActionReducerMap} from '@ngrx/store';
import * as fromExercisesState from './exercises-reducer';
import * as fromCreateExerciseState from './create-exercise.reducer';

export interface ExercisesState {
  common: fromExercisesState.CommonExercisesState,
  createExercise: fromCreateExerciseState.CreateExerciseState
}

export const exercisesReducerMap: ActionReducerMap<ExercisesState, any> = {
  common: fromExercisesState.exercisesReducerFn,
  createExercise: fromCreateExerciseState.createExerciseReducerFn
};

export const EXERCISES_STORE_FEATURE = 'exercises';
export const selectExercisesState = state => state[EXERCISES_STORE_FEATURE];

export * from './exercises-reducer';
export * from './create-exercise.reducer';
