import { Injectable, Injector } from "@angular/core";

import { BaseHttpService } from '../base/base-http.service';

@Injectable()
export class SmartItemService extends BaseHttpService {
  protected url = `item`;
  constructor(protected injector: Injector) {
    super(injector);
  }
}
