import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromTrainingPages from './pages';
import * as fromTrainingComponents from './components';
import {TrainingRoutingModule} from './training-routing.module';
import {MaterialModule} from "@app/material/material.module";


@NgModule({
  declarations: [
    ...fromTrainingComponents.components,
    ...fromTrainingPages.pages
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule {
}
