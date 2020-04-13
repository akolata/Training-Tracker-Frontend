import {Action, createReducer, on} from '@ngrx/store';
import * as fromGymActions from '../actions';
import * as fromGymModels from '../../models';
import * as fromCoredModels from '@tt-core/model';

export interface BrowseGymsState {
  form: fromGymModels.BrowseGymsForm;
  gyms: fromCoredModels.Gym[];
}

export const initialBrowseGymsState: BrowseGymsState = {
  form: {},
  gyms: []
};

const browseGymsReducer = createReducer(
  initialBrowseGymsState,
  on(fromGymActions.BrowseGymActions.setBrowseGymsForm, (state, {form}) => ({...state, form}))
);

export function gymReducerFn(state: BrowseGymsState | undefined, action: Action) {
  return browseGymsReducer(state, action);
}
