import { Component, Injector } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartItemService } from "../../../@core/service/routes/smart-item.service";
import { BaseListComponent } from '../../../pages/base-list/base-list.component';
import { Item, StyleItemModel } from "../../../shared/models";

@Component({
  selector: "ngx-smart-item",
  template: `<base-list-style
  [routerName]="routerName" [model]="model"
  [settings]="settings" [source]="source"
  (onCreate)="onCreateConfirm($event)"
  (onDelete)="onDeleteConfirm($event)"
  (onEdit)="onEditConfirm($event)">
  </base-list-style>`,
})
export class SmartItemComponent extends BaseListComponent<Item> {
  public source: LocalDataSource = new LocalDataSource();
  public routerName = "Smart Items";
  public model = StyleItemModel();

  constructor(protected injector: Injector) {
    super(injector);

    this.service = injector.get(SmartItemService);
  }
}
