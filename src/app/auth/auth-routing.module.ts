import {RouterModule, Routes} from '@angular/router';
import {SignInComponent, SignUpComponent} from './components';
import {NgModule} from '@angular/core';
import * as fromCoreGuards from '../core/guards/no-auth-guard.service';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [fromCoreGuards.NoAuthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [fromCoreGuards.NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
