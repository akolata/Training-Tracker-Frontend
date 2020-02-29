import {createAction, props} from '@ngrx/store';
import * as fromTrainingsModel from '../../model';
import * as fromSharedModel from '@tt-shared/model';

export const setSearchTrainingsForm = createAction(
  '[Browse Tickets Page] Set form',
  props<{ form: fromTrainingsModel.SearchTrainingsForm }>()
);
export const setSearchTrainingTableState = createAction(
  '[Browse Tickets Page] Set table state',
  props<{ tableState: fromSharedModel.TableState }>()
);
export const searchTrainings = createAction('[Browse Tickets Page] Search Trainings');
export const searchTrainingsSuccess = createAction(
  '[Browse Trainings Effect] Search Trainings Success',
  props<{ trainings: fromTrainingsModel.Training[] }>()
);
export const searchTrainingsFailure = createAction(
  '[Browse Trainings Effect] Search Trainings Failure'
);
