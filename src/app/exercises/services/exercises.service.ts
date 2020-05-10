import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as fromSharedUtils from '@tt-shared/util';
import * as fromExercisesModels from '../models';

@Injectable()
export class ExercisesService {

  constructor(private http: HttpClient) {
  }

  getExercisesTypes(): Observable<fromExercisesModels.ExercisesTypesResponse> {
    return this.http.get<fromExercisesModels.ExercisesTypesResponse>('api/exercises/types');
  }

  createExercise(form: fromExercisesModels.CreateExerciseForm): Observable<fromExercisesModels.CreateExerciseResponse> {
    const request: fromExercisesModels.CreateExerciseRequest = fromSharedUtils.toHttpParams(form);
    return this.http.post<fromExercisesModels.CreateExerciseResponse>('api/exercises', request);
  }

}
