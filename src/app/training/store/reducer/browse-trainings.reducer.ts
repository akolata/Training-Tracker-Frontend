import * as fromTrainingsModel from '../../model';
import * as fromTrainingsActions from '../actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface BrowseTrainingsState {
  form: fromTrainingsModel.SearchTrainingsForm;
  trainings: fromTrainingsModel.Training[];
}

export const initialState: BrowseTrainingsState = {
  form: {},
  trainings: []
};

const browseTrainingsReducer = createReducer(
  initialState,
  on(fromTrainingsActions.setSearchTrainingsForm, (state, {form}) => ({...state, form})),
  on(fromTrainingsActions.searchTrainingsSuccess, (state, {trainings}) => ({...state, trainings}))
);

export function reducer(state: BrowseTrainingsState, action: Action) {
  return browseTrainingsReducer(state, action);
}
