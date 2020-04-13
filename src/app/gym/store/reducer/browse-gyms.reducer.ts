import {Action, createReducer, on} from '@ngrx/store';
import * as fromGymActions from '../actions';
import * as fromGymModels from '../../models';
import * as fromCoredModels from '@tt-core/model';
import * as fromSharedModel from '@tt-shared/model';

export interface BrowseGymsState {
  form: fromGymModels.BrowseGymsForm;
  gyms: fromCoredModels.Gym[];
  isLoading: boolean;
  tableState: fromSharedModel.TableState;
  paginationState: fromSharedModel.PaginationState;
}

export const initialBrowseGymsState: BrowseGymsState = {
  form: {},
  gyms: [],
  isLoading: false,
  tableState: {
    sort: {property: 'name', direction: fromSharedModel.SortDirection.ASC},
    page: {...fromSharedModel.DEFAULT_PAGE_QUERY}
  },
  paginationState: {...fromSharedModel.DEFAULT_PAGINATION_STATE}
};

const browseGymsReducer = createReducer(
  initialBrowseGymsState,
  on(fromGymActions.BrowseGymActions.setBrowseGymsForm, (state, {form}) => ({
    ...state,
    form
  })),
  on(fromGymActions.BrowseGymActions.searchGyms, (state) => ({
    ...state,
    isLoading: true
  })),
  on(fromGymActions.BrowseGymActions.searchGymsSuccess, (state, {gyms}) => ({
    ...state,
    gyms,
    isLoading: false
  })),
  on(fromGymActions.BrowseGymActions.searchGymsFailure, (state) => ({
    ...state,
    gyms: [],
    isLoading: false
  })),
  on(fromGymActions.BrowseGymActions.setBrowseGymsTableState, (state, {tableState}) => ({
    ...state,
    tableState
  })),
  on(fromGymActions.BrowseGymActions.setBrowseGymsPaginationState, (state, {paginationState}) => ({
    ...state,
    paginationState
  }))
);

export function gymReducerFn(state: BrowseGymsState | undefined, action: Action) {
  return browseGymsReducer(state, action);
}
