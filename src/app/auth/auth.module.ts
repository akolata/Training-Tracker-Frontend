import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from './components';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import * as fromPages from './pages';
import * as fromServices from './services';

// https://github.com/gothinkster/angular-realworld-example-app/tree/master/src/app/profile
@NgModule({
  declarations: [...fromPages.pages, ...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
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
      providers: [...fromServices.services]
    }
  }

}
