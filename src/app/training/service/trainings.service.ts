import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import * as fromTrainingsModel from '../model';
import * as fromSharedModel from '@tt-shared/model';
import * as fromSharedUtil from '@tt-shared/util';
import {Observable} from "rxjs";

@Injectable()
export class TrainingsService {

  constructor(private http: HttpClient) {
  }

  browseTrainings(
    form: fromTrainingsModel.SearchTrainingsForm,
    pageQuery: fromSharedModel.PageQuery = {},
    sortQuery: fromSharedModel.SortQuery = {},
    userId: number): Observable<HttpResponse<fromTrainingsModel.SearchTrainingsResponse>> {
    const formParams = fromSharedUtil.toHttpParams(form);
    const pageParams = fromSharedUtil.pageQueryToHttpParams(pageQuery);
    const sortParams = fromSharedUtil.sortQueryToHttpParams(sortQuery);
    const params = {
      ...formParams, ...pageParams, ...sortParams
    };
    return this.http.get<fromTrainingsModel.SearchTrainingsResponse>(`api/users/${userId}/trainings`, {params,
    observe: "response"});
  }

}
