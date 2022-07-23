import { Component, Input, Output, EventEmitter } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: "base-list-style",
  templateUrl: "./base-list-style.component.html",
  styleUrls: ["./base-list-style.component.scss"]
})
export class BaseListStyleComponent {
  @Input() source: LocalDataSource;
  @Input() selectedItems: number[];
  @Input() routerName = "";
  @Input() settings = {};
  @Input() model = {};

  @Output() onCreate = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  emitCreate = (e) => this.onCreate.emit(e);
  emitDelete = (e) => this.onDelete.emit(e);
  emitEdit = (e) => this.onEdit.emit(e);
}
