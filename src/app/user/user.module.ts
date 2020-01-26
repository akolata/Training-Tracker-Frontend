import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromUserPages from './pages';
import * as fromUserComponents from './components';
import {UserRoutingModule} from "./user-routing.module";



@NgModule({
  declarations: [
    ...fromUserComponents.components,
    ...fromUserPages.pages
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
