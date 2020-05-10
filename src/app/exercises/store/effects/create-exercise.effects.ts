import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CreateExerciseActions} from '../actions';
import {ExercisesService} from '../../services';
import {CreateExerciseResponse} from '../../models';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class CreateExerciseEffects {

  createExercise$ = createEffect(() => this.actions$
    .pipe(
      ofType(CreateExerciseActions.createExercise),
      exhaustMap(action => this.exercisesService.createExercise(action.form)
        .pipe(
          map((response: CreateExerciseResponse) => CreateExerciseActions.createExerciseSuccess()),
          catchError((error: HttpErrorResponse) => of(CreateExerciseActions.createExerciseFailure({errorMsg: error.error.errorMsg})))
        )
      )
    )
  );

  createExerciseSuccess$ = createEffect(() => this.actions$
      .pipe(
        ofType(CreateExerciseActions.createExerciseSuccess),
        tap(() => this.snackBar.open('Exercise created!', 'Close', {duration: 5000}))
      )
    , {dispatch: false});

  constructor(
    private actions$: Actions,
    private exercisesService: ExercisesService,
    private snackBar: MatSnackBar) {
  }
}
