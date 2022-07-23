import { Injectable, Injector } from "@angular/core";

import { BaseHttpService } from '../base/base-http.service';

@Injectable()
export class SmartUserService extends BaseHttpService {
  protected url = `user`;
  constructor(protected injector: Injector) {
    super(injector);
  }
}
