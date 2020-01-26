import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from './components';
import {AuthRoutingModule} from './auth-routing.module';
import * as fromPages from './pages';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers';
import {SharedModule} from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {CoreModule} from '../core/core.module';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
    ...fromPages.pages,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([fromAuth.AuthEffects])
  ]
})
export class AuthModule {
}
