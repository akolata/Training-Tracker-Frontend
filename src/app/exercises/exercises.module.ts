import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExercisesRoutingModule} from './exercises-routing.module';
import * as fromExercisesComponents from './components';
import * as fromExercisesPages from './pages';


@NgModule({
  declarations: [
    ...fromExercisesComponents.components,
    ...fromExercisesPages.pages
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule {
}
