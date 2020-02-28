import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromTrainingPages from './pages';
import * as fromCoreGuards from '@app/core/guards';


export const routes: Routes = [
  {
    path: '',
    component: fromTrainingPages.TrainingsSummaryPage,
    canActivate: [fromCoreGuards.AuthGuard]
  },
  {
    path: 'browse',
    component: fromTrainingPages.BrowseTrainingPage,
    canActivate: [fromCoreGuards.AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {

}
