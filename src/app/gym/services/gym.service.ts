import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromSharedUtils from '@tt-shared/util';
import * as fromGymModel from '../models';
import * as fromCoreModel from '@app/core/model';
import * as fromSharedModel from '@tt-shared/model';

@Injectable()
export class GymService {

  constructor(private http: HttpClient) {
  }

  createGym(request: fromGymModel.CreateGymRequest): Observable<fromCoreModel.Gym> {
    return this.http.post<fromCoreModel.Gym>('/api/gyms', request);
  }

  browseGyms(
    parameters: fromGymModel.BrowseGymsRequestParameters,
    pageQuery: fromSharedModel.PageQuery = {},
    sortQuery: fromSharedModel.SortQuery = {}): Observable<HttpResponse<fromGymModel.BrowseGymsResponse>> {
    const params = {
      ...fromSharedUtils.toHttpParams(parameters),
      ...fromSharedUtils.pageQueryToHttpParams(pageQuery),
      ...fromSharedUtils.sortQueryToHttpParams(sortQuery)
    };
    return this.http.get<fromGymModel.BrowseGymsResponse>('/api/gyms', {params, observe: 'response'});
  }
}
