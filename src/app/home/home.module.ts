import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from './components';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
