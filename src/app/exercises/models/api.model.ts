import {ExerciseType} from '@tt-core/model';

export interface ExercisesTypesResponse {
  types: ExerciseType[];
}

export interface CreateExerciseRequest {
  name: string;
  type: ExerciseType;
}

export interface CreateExerciseResponse {
  id: number;
  name: string;
  type: ExerciseType;
}
