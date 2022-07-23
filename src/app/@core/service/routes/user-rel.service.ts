import { Injectable, Injector } from "@angular/core";

import { BaseHttpService } from '../base/base-http.service';

@Injectable()
export class UserRelService extends BaseHttpService {
  protected url = `RelUser`;
  constructor(protected injector: Injector) {
    super(injector);
  }
}
