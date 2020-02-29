import * as fromBrowseTrainingsState from './browse-trainings.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface TrainingsState {
  browseTrainings: fromBrowseTrainingsState.BrowseTrainingsState
}

export const trainingsReducerMap: ActionReducerMap<TrainingsState, any> = {
  browseTrainings: fromBrowseTrainingsState.reducer
};

export * from './browse-trainings.reducer';
