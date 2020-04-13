import {createAction, props} from '@ngrx/store';
import * as fromCoreModels from '../../model';

export const getServerStatus = createAction(
  '[APP] Get Server Status'
);
export const getServerStatusSuccess = createAction(
  '[APP] Get Server Status Success',
  props<{serverStatus: fromCoreModels.ServerStatus}>()
);
export const getServerStatusFailure = createAction(
  '[APP] Get Server Status Failure'
);
export const getServerInfo = createAction(
  '[APP] Get Server Info'
);
export const getServerInfoSuccess = createAction(
  '[APP] Get Server Info Success',
  props<{serverInfo: fromCoreModels.ServerInfo}>()
);
export const getServerInfoFailure = createAction(
  '[APP] Get Server Info Failure'
);
