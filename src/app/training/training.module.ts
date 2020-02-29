import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromTrainingPages from './pages';
import * as fromTrainingComponents from './components';
import * as fromTrainingServices from './service';
import * as fromTrainingStore from './store';
import {TrainingRoutingModule} from './training-routing.module';
import {MaterialModule} from '@app/material/material.module';
import {SharedModule} from "@tt-shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('trainings', fromTrainingStore.trainingsReducerMap),
    EffectsModule.forFeature([...fromTrainingStore.effects])
  ],
  declarations: [
    ...fromTrainingComponents.components,
    ...fromTrainingPages.pages
  ],
  providers: [
    ...fromTrainingServices.services
  ]
})
export class TrainingModule {
}
