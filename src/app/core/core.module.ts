import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CoreRoutingModule} from './core-routing.module';
import {MaterialModule} from '../material/material.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromInterceptors from './interceptors';
import * as fromGuards from './guards';
import * as fromCoreServices from './services';
import * as fromCorePages from './pages';
import * as fromCoreComponents from './components';
import * as fromCoreStore from './store';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    StoreModule.forFeature('core', fromCoreStore.coreReducerFn),
    EffectsModule.forFeature([...fromCoreStore.effects])
  ],
  declarations: [
    ...fromCoreComponents.components,
    ...fromCorePages.pages
  ],
  exports: [
    fromCoreComponents.AppHeaderComponent,
    fromCoreComponents.AppFooterComponent,
    fromCoreComponents.ServerDetailsComponent
  ]
})
export class CoreModule {

  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: fromInterceptors.AuthTokenInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: fromInterceptors.AuthErrorInterceptor, multi: true},
        ...fromGuards.guards,
        ...fromCoreServices.services
      ]
    }
  }

}
