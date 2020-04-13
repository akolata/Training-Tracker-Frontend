import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as fromCoreServices from '../../services';
import * as fromCoreActions from '../actions';
import * as fromCoreModels from '../../model';

@Injectable()
export class CoreEffect {

  fetchServerStatus$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromCoreActions.CoreActions.getServerStatus),
      switchMap(() => this.serverDetailsService.getServerStatus()
        .pipe(
          map((serverStatus: fromCoreModels.ServerStatus) => fromCoreActions.CoreActions.getServerStatusSuccess({serverStatus})),
          catchError(() => of(fromCoreActions.CoreActions.getServerStatusFailure()))
        )
      )
    )
  );

  fetchServerInfo$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromCoreActions.CoreActions.getServerInfo),
      switchMap(() => this.serverDetailsService.getServerInfo()
        .pipe(
          map((serverInfo: fromCoreModels.ServerInfo) => fromCoreActions.CoreActions.getServerInfoSuccess({serverInfo})),
          catchError(() => of(fromCoreActions.CoreActions.getServerInfoFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private serverDetailsService: fromCoreServices.ServerDetailsService
  ) {
  }

}
