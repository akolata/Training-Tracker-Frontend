import {ActionReducerMap} from '@ngrx/store';
import * as fromExercisesState from './exercises-reducer';

export interface ExercisesState {
  common: fromExercisesState.CommonExercisesState
}

export const exercisesReducerMap: ActionReducerMap<ExercisesState, any> = {
  common: fromExercisesState.exercisesReducerFn
};

export * from './exercises-reducer';
