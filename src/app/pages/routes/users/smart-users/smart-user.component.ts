import { Component, Injector } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartUserService } from "../../../../@core/service/routes/smart-user.service";
import { BaseListComponent } from "../../../base-list/base-list.component";
import { StyleUserModel, User } from "../../../../shared/models";

@Component({
  selector: "ngx-smart-user",
  template: `<base-list-style
  [routerName]="routerName" [model]="model"
  [settings]="settings" [source]="source"
  (onCreate)="onCreateConfirm($event)"
  (onDelete)="onDeleteConfirm($event)"
  (onEdit)="onEditConfirm($event)">
  </base-list-style>`,
})
export class SmartUserComponent extends BaseListComponent<User> {
  public source: LocalDataSource = new LocalDataSource();
  public routerName = "Smart Users";
  public model = StyleUserModel();

  constructor(protected injector: Injector) {
    super(injector);

    this.service = injector.get(SmartUserService);
  }

  public onCreateConfirm(event?): Event {
    let condition = event.data != event.newData;
    let action = this.service.createData(event.newData);

    event.newData.password = "teste"; // until add a modal

    return this.confirmationType(condition, action, event);
  }
}
