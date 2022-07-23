import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { BaseAuthService } from '../../@core/service/base/base-auth.service';

@Injectable()
export class AuthService extends BaseAuthService {
  protected url = `auth`;

  login = (user: any): Observable<any> => this.sendLogin(user);

  // reset = (user: any): Observable<any> => this.sendReset(user);

  // register = (user: any): Observable<any> => this.sendRegister(user);
}
