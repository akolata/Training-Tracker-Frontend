import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ValidationService {

  constructor(private http: HttpClient) {
  }

  verifyEmail(email: string): Observable<HttpResponse<any>> {
    return this.http.head<HttpResponse<any>>(`/api/users/emails/${email}`, {observe: 'response'});
  }

  verifyUsername(username: string): Observable<HttpResponse<any>> {
    return this.http.head<HttpResponse<any>>(`/api/users/usernames/${username}`, {observe: 'response'});
  }
}
