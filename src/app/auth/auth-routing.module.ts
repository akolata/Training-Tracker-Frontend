import {RouterModule, Routes} from '@angular/router';
import {SignInComponent, SignUpComponent} from './components';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
    // canActivate: [NoAuthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
    // canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
