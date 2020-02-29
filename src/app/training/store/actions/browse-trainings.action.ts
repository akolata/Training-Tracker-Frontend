import {createAction, props} from '@ngrx/store';
import * as fromTrainingsModel from '../../model';

export const setSearchTrainingsForm = createAction(
  '[Browse Tickets Page] Set form',
  props<{form: fromTrainingsModel.SearchTrainingsForm}>()
);
export const searchTrainings = createAction('[Browse Tickets Page] Search Trainings');
export const searchTrainingsSuccess = createAction(
  '[Browse Trainings Effect] Search Trainings Success',
  props<{ trainings: fromTrainingsModel.Training[] }>()
);
export const searchTrainingsFailure = createAction(
  '[Browse Trainings Effect] Search Trainings Failure'
);
