import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromSharedUtils from '@tt-shared/util';
import * as fromGymModel from '../models';
import * as fromCoreModel from '@app/core/model';

@Injectable()
export class GymService {

  constructor(private http: HttpClient) {
  }

  createGym(request: fromGymModel.CreateGymRequest): Observable<fromCoreModel.Gym> {
    return this.http.post<fromCoreModel.Gym>('/api/gyms', request);
  }

  browseGyms(parameters: fromGymModel.BrowseGymsRequestParameters): Observable<fromGymModel.BrowseGymsResponse> {
    const params = {
      ...fromSharedUtils.toHttpParams(parameters)
    };
    return this.http.get<fromGymModel.BrowseGymsResponse>('/api/gyms', {params});
  }
}
