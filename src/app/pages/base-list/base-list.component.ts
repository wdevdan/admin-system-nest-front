import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Observable, Subject } from "rxjs";

import { SmartTableOptions, notifyParams, getMessages } from "../../shared/interfaces";
import { BaseHttpService } from "../../@core/service/base/base-http.service";
import { NotifyService } from '../../shared/services/notify.service';
import { notifyTypes, getNotifyType } from '../../shared/enums';
import { ConfigModel } from "../../shared/common";


@Component({ template: "" })
export class BaseListComponent<Generic> implements OnInit, OnDestroy {
  protected endSubscription = new Subject<void>();
  protected getAllBySubject = new Subject<void>();
  protected service: BaseHttpService;
  protected notify: NotifyService;

  constructor(protected injector: Injector) {
    this.notify = injector.get(NotifyService);
  }

  public source: LocalDataSource = new LocalDataSource();
  public settings: SmartTableOptions;
  public notifyParams: notifyParams;
  public data: Generic[] = [];
  public routerName = "";
  public pagination: any;
  public delay = 0;
  public model;

  public selectedItems: number[] = [];
  public searchText: string = "";
  public filterKey = "";

  ngOnInit() {
    this.loadSettings();
    this.getData();
  }

  ngOnDestroy() {
    this.endSubscription.next();
    this.endSubscription.complete();
    // this.service.hasDataChanges.unsubscribe();
  }

  public searching(_: string) {
    this.getAllBySubject.next();
  }

  public onEditConfirm(event?): Event {
    let condition = event.data != event.newData;
    let action = this.service.updateData(event.newData);

    return this.confirmationType(condition, action, event);
  }

  public applyFilter(field: string) {
    this.filterKey = field;
    this.getAllBySubject.next();
  }

  public toggleSelection(id: number) {
    const selected = this.selectedItems.find((f) => f == id);

    if (selected) this.selectedItems.splice(selected, 1);
    else this.selectedItems.push(id);
  }

  public isSelected = (id: number) => this.selectedItems.findIndex((f) => f == id) > -1;

  public changePage = (value: any) => this.setPagination(value);

  public onCreateConfirm(event?): Event {
    let condition = event.data != event.newData;
    let action = this.service.createData(event.newData);

    return this.confirmationType(condition, action, event);
  }

  public onDeleteConfirm(event?): Event {
    let confirmationMsg = 'Are you sure you want to delete?'

    let condition = (window.confirm(confirmationMsg))
    let action = this.service.deleteData(event.data.uid);

    return this.confirmationType(condition, action, event);
  }

  protected getData = () => {
    this.notify.show(null);
    this.service.refreshData();

    this.service.hasDataChanges.subscribe({
      next: (res) => this.setData(res),
      error: (err) => this.validateNetwork(err),
      complete: _ => _ ? console.info(_) : undefined,
    });
  };

  protected setData = (data: Generic[]) => {
    this.data = this.addLink(data as Generic[]);
    this.source.load(this.addLink(data));
  };

  protected addLink = (data: Generic[]) => data.map((item: any) => {
    const url = window.location.href;
    const page = url.split('-').pop();

    item.view = `<a href='${url}/../form-${page}/${item.uid}'>Click</a>`;
    return item;
  }) as Generic[];

  protected setPagination(value: any) {
    this.pagination = {
      size: 10,
      page: 1,
      items: [],
      count: 0,
      pageCount: 0,
    } as any;

    this.pagination.page = value.any;
    this.pagination.size = value.size;

    this.searching("");
  }
  protected validateNetwork(response: any) {
    const online = response.statusCode != 504;

    if (response && online) return true;

    this.notifyParams.status = getNotifyType(notifyTypes.WARNING);
    this.notifyParams.content = 'Verifique sua conexao';
    this.notifyParams.title = 'Indisponivel';
    this.notifyParams.duration = 10;

    this.notify.show(this.notifyParams);

    return false;
  }

  protected showNoData() {
    this.notifyParams.status = getNotifyType(notifyTypes.SUCCESS);
    this.notifyParams.content = 'Sem dados para mostrar';
    this.notifyParams.title = 'Sucesso';
    this.notifyParams.duration = 10;
  }

  protected confirmationType(condition: boolean, action: Observable<any>, event: any) {
    if (!condition) return event.confirm.reject();

    return action.subscribe(
      (response) => {
        if (this.validateNetwork(response))
        if (response == 1 || response.statusCode == 200) {

          this.notifyParams.status = getNotifyType(notifyTypes.SUCCESS);
          this.notifyParams.content = 'Ação efetuada com sucesso';
          this.notifyParams.title = 'Sucesso';
          this.notifyParams.duration = 2;

          this.notify.show(this.notifyParams);

          return event.confirm.resolve()
        } else {
          this.log(response);
          const errors = getMessages(response);

          this.notifyParams.status = getNotifyType(notifyTypes.DANGER);
          this.notifyParams.content = errors.body.join(', ');
          this.notifyParams.title = errors.title.join(', ');
          this.notifyParams.duration = 30;

          this.notify.show(this.notifyParams);

          return event.confirm.reject();
        }
      })
  }

  protected loadSettings() {
    this.notifyParams = this.notify.getDefaultValues();

    const custom = (v: string) => `<i class="nb-${v}"></i>`;
    const checkmark = '<i class="nb-checkmark"></i>';
    const close = '<i class="nb-close"></i>';

    this.settings = {
      add: {
        addButtonContent: custom('plus'),
        createButtonContent: checkmark,
        cancelButtonContent: close,
        confirmCreate: true,
      },
      edit: {
        editButtonContent: custom('edit'),
        saveButtonContent: checkmark,
        cancelButtonContent: close,
        confirmSave: true,
      },
      delete: {
        deleteButtonContent: custom('trash'),
        confirmDelete: true,
      },
      columns: {},
    };

    const properties = this.model;
    this.settings.columns = properties;

    Object.getOwnPropertyNames(properties).forEach((prop) => {
      this.settings.columns[prop].title = prop;
    });

    this.changeTitles();

    this.setHtmlTypes();
    this.setCustomSizes();
  }

  protected changeTitles() {
    const keys = Object.keys(this.settings.columns);
    const columns = keys.map((k) => this.settings.columns[k]);
    const formattedValues = new ConfigModel(columns).converted();

    keys.forEach((key) => {
      this.settings.columns[key].title = formattedValues.find(
        (item) => item.title === key
      ).value;
    });
  }

  protected setHtmlTypes() {
    this.settings.columns['view'].type = 'html';
  };

  protected setCustomSizes() {
    this.settings.columns['view'].width = '5%';
  };

  public log = (any) => console.info("Logger, value => ", any);

  // protected abstract customOnInit(): void;
}
