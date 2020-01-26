import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import * as fromPages from './pages';
import * as fromCoreGuards from './guards/';

const routes: Routes = [
  {
    path: '',
    component: fromPages.LandingPage,
    canActivate: [fromCoreGuards.NoAuthGuard]
  },
  {
    path: 'not-found',
    component: fromPages.NotFoundPage
  },
  {
    path: 'unauthorized',
    component: fromPages.UnauthorizedPage
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {

}
