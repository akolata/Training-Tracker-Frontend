import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExercisesRoutingModule} from './exercises-routing.module';
import {SharedModule} from '@tt-shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromExercisesComponents from './components';
import * as fromExercisesPages from './pages';
import * as fromExercisesServices from './services';
import * as fromExercisesGuards from './guards';
import * as fromExercisesStore from './store';


@NgModule({
  declarations: [
    ...fromExercisesComponents.components,
    ...fromExercisesPages.pages
  ],
  providers: [
    ...fromExercisesServices.services,
    ...fromExercisesGuards.guards
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromExercisesStore.EXERCISES_STORE_FEATURE, fromExercisesStore.exercisesReducerMap),
    EffectsModule.forFeature([...fromExercisesStore.effects]),
    ExercisesRoutingModule
  ]
})
export class ExercisesModule {
}
