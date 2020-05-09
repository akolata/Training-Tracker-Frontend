import {Injectable} from "@angular/core";
import {ExercisesTypesResponse} from '../models';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ExercisesService {

  constructor(private http: HttpClient) {
  }

  getExercisesTypes(): Observable<ExercisesTypesResponse> {
    return this.http.get<ExercisesTypesResponse>('api/exercises/types');
  }

}
