import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from './components';
import {AuthRoutingModule} from './auth-routing.module';
import * as fromPages from './pages';
import * as fromServices from './services';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers';
import {SharedModule} from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './reducers/auth.effects';

// https://github.com/gothinkster/angular-realworld-example-app/tree/master/src/app/profile
@NgModule({
  declarations: [...fromPages.pages, ...fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  // providers: [
  //   NoAuthGuard
  // ]
})
export class AuthModule {

  constructor(@SkipSelf() @Optional() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('AuthModule is already loaded');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [...fromServices.services] // TODO TTF-001 provider AuthGuard here
    }
  }

}
