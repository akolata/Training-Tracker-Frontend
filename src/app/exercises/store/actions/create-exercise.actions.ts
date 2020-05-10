import {createAction, props} from '@ngrx/store';
import {CreateExerciseForm} from '../../models';

export const createExercise = createAction(
  '[Add Exercise Page] Create Exercise',
  props<{ form: CreateExerciseForm }>()
);
export const createExerciseSuccess = createAction(
  '[Add Exercise Page] Create Exercise Success'
);
export const createExerciseFailure = createAction(
  '[Add Exercise Page] Create Exercise Failure',
  props<{ errorMsg: string }>()
);
export const clearState = createAction(
  '[Add Exercise Guard] Clear State'
);
