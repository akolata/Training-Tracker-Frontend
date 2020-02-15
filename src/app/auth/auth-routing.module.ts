import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import * as fromPages from './pages';
import * as fromCoreGuards from '@app/core/guards/no-auth-guard.service';

const routes: Routes = [
  {
    path: 'sign-in',
    component: fromPages.SignInPage,
    canActivate: [fromCoreGuards.NoAuthGuard]
  },
  {
    path: 'sign-up',
    component: fromPages.SignUpPage,
    canActivate: [fromCoreGuards.NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
