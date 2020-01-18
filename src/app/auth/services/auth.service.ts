import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromModel from '../model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(request: fromModel.SignInRequest): Observable<fromModel.SignInResponse> {
    return this.http.post<fromModel.SignInResponse>('/api/auth/sign-in', request);
  }
}
