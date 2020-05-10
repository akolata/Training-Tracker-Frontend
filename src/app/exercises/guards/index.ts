import {LoadExercisesTypesGuard} from './load-exercises-types.guard';
import {AddExerciseGuard} from './add-exercise-guard.service';

export const guards = [
  LoadExercisesTypesGuard,
  AddExerciseGuard
];

export * from './load-exercises-types.guard';
export * from './add-exercise-guard.service';
