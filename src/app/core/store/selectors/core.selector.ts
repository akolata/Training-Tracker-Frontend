import {createSelector} from '@ngrx/store';
import * as fromCoreReducer from '../reducer';

export const getCoreState = state => state.core;
export const selectServerStatus = createSelector(
  getCoreState,
  (state: fromCoreReducer.CoreState) => state.serverStatus
);
export const selectServerInfo = createSelector(
  getCoreState,
  (state: fromCoreReducer.CoreState) => state.serverInfo
);
