import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;
  jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.loadToken();
  }

  login(user: string, password: string): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bGFyMA==');
    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true }).toPromise()
      .then(response => {
        this.storeToken(response.access_token);
      }).catch(response => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Invalid user or password');
          }
        }

        return Promise.reject(response);
      });
  }

  getNewAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bGFyMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.storeToken(response.access_token);

        console.log('New access token created!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Error renewing token.', response);
        return Promise.resolve(null);
      });
  }

  clearAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  hasAuthority(authority: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(authority);
  }

  hasAnyAuthority(roles) {
    for (const role of roles) {
      if (this.hasAuthority(role)) {
        return true;
      }
    }

    return false;
  }

  private storeToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.storeToken(token);
    }
  }
}
