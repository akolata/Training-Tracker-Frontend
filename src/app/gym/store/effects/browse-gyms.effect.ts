import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import * as fromGymServices from '../../services';
import * as fromGymActions from '../actions';
import * as fromGymSelectors from '../selectors';
import {catchError, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class BrowseGymsEffect {

  browseGyms$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(fromGymActions.BrowseGymActions.searchGyms),
        tap(action => console.log(action)),
        withLatestFrom(this.store$.select(fromGymSelectors.selectBrowseGymsForm)),
        tap(([action, form]) => console.log(action)),
        switchMap(([action, form]) => this.gymService.browseGyms(form)
          .pipe(
            map(response => fromGymActions.BrowseGymActions.searchGymsSuccess({gyms: response.gyms})),
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
