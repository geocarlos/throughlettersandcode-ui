import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {  Observable, from as observableFromPromise } from 'rxjs';

export class NotAuthenticatedError {}

@Injectable({
  providedIn: 'root'
})
export class TlcHttp extends HttpClient {

  constructor(
    private auth: AuthService,
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.delete<T>(url, options));
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.patch<T>(url, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.head<T>(url, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.options<T>(url, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.get<T>(url, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.post<T>(url, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequest<T>(() => super.put<T>(url, body, options));
  }

  private makeRequest<T>(fn: CallableFunction): Observable<T> {
    if (this.auth.isAccessTokenInvalid()) {
      console.log('HTTP request with invalid access token. Acquiring new token...');

      const requestNewAccessToken = this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();
        });

      return observableFromPromise(requestNewAccessToken);
    } else {
      return fn();
    }
  }
}
