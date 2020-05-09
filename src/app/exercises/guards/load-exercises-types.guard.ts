import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {first, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as fromCoreModels from '@tt-core/model';
import * as fromExercisesStore from '../store';

@Injectable()
export class LoadExercisesTypesGuard implements CanActivate {
  constructor(private store: Store<any>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(fromExercisesStore.selectExercisesTypes),
      tap((types: fromCoreModels.ExerciseType[]) => {
        if (!types || !types.length) {
          this.store.dispatch(fromExercisesStore.ExercisesActions.getExerciseTypes())
        }
      }),
      map(() => true),
      first()
    );
  }

}
