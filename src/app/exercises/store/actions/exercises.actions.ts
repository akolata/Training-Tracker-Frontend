import {createAction, props} from '@ngrx/store';
import * as fromCoreModels from '@tt-core/model';

export const getExerciseTypes = createAction(
  '[Exercises Resolver] Load Exercises Types',
  props()
);
export const setExercisesTypes = createAction(
  '[Exercises Resolver] Load Exercises Types',
  props<{ types: fromCoreModels.ExerciseType[] }>()
);
