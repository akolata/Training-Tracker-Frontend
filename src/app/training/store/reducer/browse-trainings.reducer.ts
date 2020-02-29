import * as fromTrainingsModel from '../../model';
import * as fromTrainingsActions from '../actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface BrowseTrainingsState {
  form: fromTrainingsModel.SearchTrainingsForm;
}

export const initialState: BrowseTrainingsState = {
  form: {}
};

const browseTrainingsReducer = createReducer(
  initialState,
  on(fromTrainingsActions.setSearchTrainingsForm, (state, {form}) => ({...state, form}))
);

export function reducer(state: BrowseTrainingsState, action: Action) {
  return browseTrainingsReducer(state, action);
}
