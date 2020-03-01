import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as fromSharedDirectives from './directives';

@NgModule({
  declarations: [...fromSharedDirectives.directives],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...fromSharedDirectives.directives
  ]
})
export class SharedModule {
}
