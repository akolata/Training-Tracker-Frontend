import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromCoreGuards from '@app/core/guards';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule),
    canLoad: [fromCoreGuards.AuthGuard]
  },
  {
    path: 'gym',
    loadChildren: () => import('./gym/gym.module').then(module => module.GymModule),
    canLoad: [fromCoreGuards.AuthGuard]
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(module => module.TrainingModule),
    canLoad: [fromCoreGuards.AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
