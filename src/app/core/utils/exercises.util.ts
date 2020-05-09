import * as fromCoreModels from '../model';

export class ExercisesUtil {
  public static exerciseTypeToDisplayName(type: fromCoreModels.ExerciseType) {
    switch (type) {
      case fromCoreModels.ExerciseType.CARDIO:
        return 'Cardio';
      case fromCoreModels.ExerciseType.GROUP_WORKOUT:
        return 'Group Workout';
      case fromCoreModels.ExerciseType.WEIGHT_LIFTING:
        return 'Weight Lifting';
      default:
        return type;
    }
  }
}
