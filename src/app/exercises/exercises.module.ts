import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromExercisesPages from './pages';


@NgModule({
  declarations: [
    ...fromExercisesPages.pages
  ],
  imports: [
    CommonModule
  ]
})
export class ExercisesModule {
}
