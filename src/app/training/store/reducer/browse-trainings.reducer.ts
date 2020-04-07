import * as fromTrainingsModel from '../../model';
import * as fromTrainingsActions from '../actions';
import * as fromSharedModel from '@tt-shared/model';
import {Action, createReducer, on} from '@ngrx/store';

export interface BrowseTrainingsState {
  form: fromTrainingsModel.SearchTrainingsForm;
  tableState: fromSharedModel.TableState;
  paginationState: fromSharedModel.PaginationState;
  trainings: fromTrainingsModel.Training[];
  isLoading: boolean;
}

export const initialState: BrowseTrainingsState = {
  form: {},
  isLoading: false,
  tableState: {sort: {property: 'id', direction: fromSharedModel.SortDirection.ASC}, page: fromSharedModel.DEFAULT_PAGE_QUERY},
  paginationState: fromSharedModel.DEFAULT_PAGINATION_STATE,
  trainings: []
};

const browseTrainingsReducer = createReducer(
  initialState,
  on(fromTrainingsActions.setSearchTrainingsForm, (state, {form}) => ({...state, form})),
  on(fromTrainingsActions.setSearchTrainingTableState, (state, {tableState}) => ({...state, tableState})),
  on(fromTrainingsActions.searchTrainings, (state) => ({...state, isLoading: true})),
  on(fromTrainingsActions.searchTrainingsSuccess, (state, {trainings}) => ({
    ...state,
    trainings,
    isLoading: false
  })),
  on(fromTrainingsActions.setSearchTrainingsPaginationState, (state, {paginationState}) => ({...state, paginationState})),
  on(fromTrainingsActions.searchTrainingsFailure, (state) => ({
    ...state,
    isLoading: false
  }))
);

export function reducer(state: BrowseTrainingsState, action: Action) {
  return browseTrainingsReducer(state, action);
}
