import {Action, createReducer, on} from '@ngrx/store';
import {CreateExerciseActions} from '../actions';

export interface CreateExerciseState {
  createExercisePending: boolean;
  errorMsg?: string;
}

export const initialCreateExerciseState: CreateExerciseState = {
  createExercisePending: false
};

export const createExerciseReducer = createReducer(
  initialCreateExerciseState,
  on(CreateExerciseActions.createExercise, (state, {form}) => ({
    ...state,
    errorMsg: undefined,
    createExercisePending: true
  })),
  on(CreateExerciseActions.createExerciseFailure, (state, {errorMsg}) => ({
    ...state,
    errorMsg,
    createExercisePending: false
  })),
  on(CreateExerciseActions.createExerciseSuccess, (state) => ({
    ...state,
    createExercisePending: false
  }))
);

export function createExerciseReducerFn(state: CreateExerciseState, action: Action) {
  return createExerciseReducer(state, action);
}
