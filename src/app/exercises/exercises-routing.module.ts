import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import * as fromCoreGuards from '@app/core/guards';
import * as fromExercisesGuards from './guards';
import * as fromExercisesPages from './pages';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'browse'
  },
  {
    path: 'add',
    component: fromExercisesPages.AddExercisePage,
    canActivate: [fromCoreGuards.AuthGuard, fromExercisesGuards.LoadExercisesTypesGuard]
  },
  {
    path: 'browse',
    component: fromExercisesPages.BrowseExercisesPage,
    canActivate: [fromCoreGuards.AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule {

}
