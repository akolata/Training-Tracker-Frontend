import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import * as fromGymServices from '../../services';
import * as fromGymActions from '../actions';
import * as fromGymSelectors from '../selectors';
import * as fromGymModel from '@app/gym/models';
import * as fromSharedModel from '@tt-shared/model';
import * as fromSharedUtil from '@tt-shared/util';

@Injectable()
export class BrowseGymsEffect {

  changeBrowseGymsTableState$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromGymActions.BrowseGymActions.setBrowseGymsTableState),
      map(() => fromGymActions.BrowseGymActions.searchGyms())
    )
  );

  browseGyms$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(fromGymActions.BrowseGymActions.searchGyms),
        withLatestFrom(
          this.store$.select(fromGymSelectors.selectBrowseGymsForm),
          this.store$.select(fromGymSelectors.selectBrowseGymsTableState)
        ),
        switchMap(([action, form, tableState]) => this.gymService.browseGyms(form, tableState.page, tableState.sort)
          .pipe(
            switchMap((response: HttpResponse<fromGymModel.BrowseGymsResponse>) => {
              const paginationState: fromSharedModel.PaginationState = fromSharedUtil.httpHeadersToPagination(response.headers);
              return [
                fromGymActions.BrowseGymActions.searchGymsSuccess({gyms: response.body.gyms}),
                fromGymActions.BrowseGymActions.setBrowseGymsPaginationState({paginationState})
              ];
            }),
            catchError(() => of(fromGymActions.BrowseGymActions.searchGymsFailure()))
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<any>,
    private gymService: fromGymServices.GymService) {
  }

}
