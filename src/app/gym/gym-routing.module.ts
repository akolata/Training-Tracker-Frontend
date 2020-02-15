import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromPages from './pages';
import * as fromCoreGuards from '@app/core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'browse'
  },
  {
    path: 'browse',
    component: fromPages.BrowseGymsPage,
    canActivate: [fromCoreGuards.AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule {

}
