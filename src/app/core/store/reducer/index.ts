import {Action, createReducer, on} from '@ngrx/store';
import * as fromCoreModels from '../../model';
import * as fromCoreActions from '../actions';

export interface CoreState {
  serverStatus: fromCoreModels.ServerStatus,
  serverInfo: fromCoreModels.ServerInfo
}

export const initialCoreState: CoreState = {
  serverStatus: {...fromCoreModels.SERVER_STATUS_UNKNOWN},
  serverInfo: {...fromCoreModels.SERVER_INFO_UNKNOWN}
};

export const coreReducer = createReducer(
  initialCoreState,
  on(fromCoreActions.CoreActions.getServerInfoSuccess, (state, {serverInfo}) => ({
    ...state,
    serverInfo
  })),
  on(fromCoreActions.CoreActions.getServerInfoFailure, (state) => ({
    ...state,
    serverInfo: {...fromCoreModels.SERVER_INFO_UNKNOWN}
  })),
  on(fromCoreActions.CoreActions.getServerStatusSuccess, (state, {serverStatus}) => ({
    ...state,
    serverStatus
  })),
  on(fromCoreActions.CoreActions.getServerStatusFailure, (state) => ({
    ...state,
    serverStatus: {...fromCoreModels.SERVER_STATUS_UNKNOWN}
  }))
);

export function coreReducerFn(state: CoreState | undefined, action: Action) {
  return coreReducer(state, action);
}
