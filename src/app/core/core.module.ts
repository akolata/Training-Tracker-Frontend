import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import * as fromInterceptors from './interceptors';
import * as fromGuards from './guards';
import * as fromServices from './services';
import * as fromPages from './pages';
import {CoreRoutingModule} from './core-routing.module';
import { LandingPage } from './pages/landing/landing.page';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [...fromPages.pages, LandingPage]
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
        ...fromServices.services
      ]
    }
  }

}
