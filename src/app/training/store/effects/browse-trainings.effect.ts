import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromTrainingsServices from '../../service';
import * as fromTrainingsActions from '../actions';
import * as fromTrainingsSelectors from '../selectors';
import * as fromTrainingsReducers from '../reducer';
import * as fromAuthStore from '@app/auth/reducers';
import * as fromSharedUtil from '@tt-shared/util';
import * as fromSharedModel from '@tt-shared/model';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';

@Injectable()
export class BrowseTrainingsEffects {

  setSearchTrainingTableState = createEffect(
    () => this.actions$.pipe(
      ofType(fromTrainingsActions.setSearchTrainingTableState),
      map(() => fromTrainingsActions.searchTrainings())
    )
  );

  searchTrainings$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(fromTrainingsActions.searchTrainings),
        withLatestFrom(
          this.store$.select(fromTrainingsSelectors.selectBrowseTrainingsForm),
          this.store$.select(fromTrainingsSelectors.selectTrainingsTableState),
          this.store$.select(fromAuthStore.selectUser)
        ),
        switchMap(entry => this.trainingsService.browseTrainings(entry[1], entry[2].page, entry[2].sort, entry[3].id)),
        switchMap(response => {
          const paginationState: fromSharedModel.PaginationState = fromSharedUtil.httpHeadersToPagination(response.headers);
          return [
            fromTrainingsActions.searchTrainingsSuccess({trainings: response.body.trainings}),
            fromTrainingsActions.setSearchTrainingsPaginationState({paginationState})
          ];
        })
      )
  );

  /*
          concatMap(entry =>
          this.trainingsService.browseTrainings(entry[1], entry[2].page, entry[2].sort, entry[3].id)
            .pipe(
              map(response => {
                const paginationState: fromSharedModel.PaginationState = fromSharedUtil.httpHeadersToPagination(response.headers);
                return [
                  fromTrainingsActions.setSearchTrainingsPaginationState({paginationState}),
                  fromTrainingsActions.searchTrainingsSuccess({trainings: response.body.trainings})
                ];
              })
            )
      )
   */

  constructor(
    private actions$: Actions,
    private store$: Store<fromTrainingsReducers.TrainingsState>,
    private trainingsService: fromTrainingsServices.TrainingsService) {
  }
}
