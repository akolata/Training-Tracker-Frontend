import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {AddExercisePage} from '../pages';
import {CreateExerciseActions} from '../store';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable()
export class AddExerciseGuard implements CanDeactivate<AddExercisePage> {
  constructor(private store: Store<any>) {
  }

  canDeactivate(component: AddExercisePage, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean {
    this.store.dispatch(CreateExerciseActions.clearState());
    return true;
  }

}
