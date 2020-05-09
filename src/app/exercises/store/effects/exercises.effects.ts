import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as fromExercisesServices from '../../services';
import * as fromExercisesActions from '../actions';
import * as fromExercisesModels from '../../models';

@Injectable()
export class ExercisesEffects {

  loadExercisesTypes$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromExercisesActions.ExercisesActions.getExerciseTypes),
      switchMap(() => this.exercisesService.getExercisesTypes()
        .pipe(
          map((response: fromExercisesModels.ExercisesTypesResponse) => fromExercisesActions.ExercisesActions.setExercisesTypes({types: response.types})),
          catchError(() => of(fromExercisesActions.ExercisesActions.setExercisesTypes({types: []})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private exercisesService: fromExercisesServices.ExercisesService) {
  }
}
