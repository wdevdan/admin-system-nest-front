import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HttpErrorToResponse, MegaResponse, Response } from '../../../shared/interfaces';

@Injectable()
export class HttpService {
  protected environment = require('../../../../environments/environment');
  protected provider: HttpClient;

  constructor(protected injector: Injector) {
    this.provider = injector.get(HttpClient);
  }

  public apiPath = this.environment.API_PATH || '/api/';

  public header = { headers: this.authHeader };

  protected get token(): string {
    return document.cookie['jwt'] ??
    sessionStorage.getItem('jwt') ??
    localStorage.getItem('jwt');
  }

  protected get authHeader(): HttpHeaders {
    return new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  }

  protected getAll<T>(url: string, params?: HttpParams): Observable<Response<T>> {
    return this.provider.get<Response<T>>(
      this.apiPath + url,
      {
        headers: this.authHeader,
        withCredentials: true,
        params: params,
      }).pipe(catchError((error: MegaResponse) => of(HttpErrorToResponse<T>(error))));
  }

  protected create<T>(url: string, params?: any): Observable<Response<T>> {
    return this.provider.post<Response<T>>(this.apiPath + url, params, this.header).pipe(
      catchError((error: MegaResponse) => of(HttpErrorToResponse<T>(error))),
    );
  }

  protected getOne<T>(url: string, uid: any): Observable<Response<T>> | Observable<Response<any>> {
    return this.provider.get<Response<T>>(this.apiPath + url + '/uid/' + uid, this.header).pipe(
      catchError((error: MegaResponse) => of(HttpErrorToResponse<T>(error))),
    );
  }

  protected update<T>(url: string, params?: any): Observable<Response<T>> | Observable<Response<any>> {
    return this.provider.put<Response<T>>(this.apiPath + url, params, this.header).pipe(
      catchError((error: MegaResponse) => of(HttpErrorToResponse<T>(error))),
    );
  }

  protected delete(url: string, uid: string): Observable<Response<any>> {
    return this.provider.delete<Response<any>>(this.apiPath + url + '/' + uid, this.header).pipe(
      catchError((error: MegaResponse) => of(HttpErrorToResponse<any>(error))),
    );
  }

  protected fileData<T>(url: string, file: FormData): Observable<Response<T>> | Observable<Response<any>> {
    const xhr: XMLHttpRequest = new XMLHttpRequest();

    xhr.open('POST', this.apiPath + url, true);
    xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);

    return new Observable<Response<T>>((observer) => {
      xhr.onload = load;

      function load() { observer.next(JSON.parse(xhr.response) as Response<T>) }

      xhr.send(file);
    }).pipe(catchError((error: MegaResponse) => of(HttpErrorToResponse<T>(error))));
  }
}
