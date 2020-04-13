import * as fromBrowseGymsReducer from './browse-gyms.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface GymState {
  browseGyms: fromBrowseGymsReducer.BrowseGymsState;
}

export const gymReducerMap: ActionReducerMap<GymState, any> = {
  browseGyms: fromBrowseGymsReducer.gymReducerFn
};

export * from './browse-gyms.reducer';
