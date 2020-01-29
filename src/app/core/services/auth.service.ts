import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromModel from '../../auth/model';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly JWT_TOKEN_KEY = 'tt-jwt-token';

  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  saveToken(jwt: string) {
    localStorage.setItem(AuthService.JWT_TOKEN_KEY, jwt);
  }

  getToken() {
    return localStorage.getItem(AuthService.JWT_TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(AuthService.JWT_TOKEN_KEY);
  }

  getUserId(jwt: string) {
    return this.jwtHelper.decodeToken(jwt).sub;
  }

  isSignedIn(): boolean {
    const token = localStorage.getItem(AuthService.JWT_TOKEN_KEY);
    if (!token) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  isSignedOut() {
    return !this.isSignedIn();
  }

  signIn(request: fromModel.SignInRequest): Observable<fromModel.SignInResponse> {
    return this.http.post<fromModel.SignInResponse>('/api/auth/sign-in', request);
  }

  signUp(request: fromModel.SignUpRequest): Observable<any> {
    return this.http.post<any>('/api/auth/sign-up', request);
  }
}
