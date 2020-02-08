import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import * as fromInterceptors from './interceptors';
import * as fromGuards from './guards';
import * as fromCoreServices from './services';
import * as fromCorePages from './pages';
import {CoreRoutingModule} from './core-routing.module';
import {MaterialModule} from '../material/material.module';
import * as fromCoreComponents from './components';
import { BaseComponent } from './components/base/base.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...fromCoreComponents.components,
    ...fromCorePages.pages,
    BaseComponent
  ],
  exports: [
    fromCoreComponents.AppHeaderComponent,
    fromCoreComponents.AppFooterComponent
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
