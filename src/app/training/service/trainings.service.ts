import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as fromTrainingsModel from '../model';
import * as fromSharedUtil from '@tt-shared/util';
import {Observable} from "rxjs";

@Injectable()
export class TrainingsService {

  constructor(private http: HttpClient) {
  }

  browseTrainings(form: fromTrainingsModel.SearchTrainingsForm): Observable<fromTrainingsModel.SearchTrainingsResponse> {
    const trimmedForm = fromSharedUtil.trimFormValues(form);
    return this.http.get<fromTrainingsModel.SearchTrainingsResponse>('api/trainings', {params: trimmedForm});
  }

}
