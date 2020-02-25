import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as fromGymModel from '../models';
import * as fromCoreModel from '@app/core/model';
import {Observable} from 'rxjs';

@Injectable()
export class GymService {

  constructor(private http: HttpClient) { }

  createGym(request: fromGymModel.CreateGymRequest): Observable<fromCoreModel.Gym> {
    return this.http.post<fromCoreModel.Gym>('/api/gyms', request);
  }
}
