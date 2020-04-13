import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromCoreModels from '../model';

@Injectable()
export class ServerDetailsService {

  constructor(private http: HttpClient) {
  }

  getServerStatus(): Observable<fromCoreModels.ServerStatus> {
    return this.http.get<fromCoreModels.ServerStatus>('/actuator/health');
  }

  getServerInfo(): Observable<fromCoreModels.ServerInfo> {
    return this.http.get<fromCoreModels.ServerInfo>('/actuator/info');
  }
}
