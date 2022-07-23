import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HttpErrorToResponse, MegaResponse } from '../../../shared/interfaces';
import { HttpService } from './http.service';

@Injectable()
export class BaseAuthService {
  protected completeUrl = (link: string) => this.httpService.apiPath + this.url + link;

  constructor(protected httpService: HttpService, protected provider: HttpClient) {}

  public hasDataChanges = new EventEmitter<any[]>();

  protected delay: number = 0;
  protected data: any[];
  protected url = '';

  protected get authHeader(): HttpHeaders {
      return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  public header = { headers: this.authHeader };

  protected sendLogin<User>(user: User): Observable<string | null> {
    return this.provider.post<any>(this.completeUrl('/login'), user, this.header)
    .pipe(catchError((error: MegaResponse) => of(HttpErrorToResponse<User>(error))));
  }
}
