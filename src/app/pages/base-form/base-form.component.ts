import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from "rxjs";

import { BaseHttpService } from "../../@core/service/base/base-http.service";
import { NotifyService } from '../../shared/services/notify.service';
import { notifyParams, getMessages } from "../../shared/interfaces";
import { notifyTypes, getNotifyType } from '../../shared/enums';

@Component({ template: "" })
export class BaseFormComponent<Generic> implements OnInit, OnDestroy {
  protected endSubscription = new Subject<void>();
  protected getAllBySubject = new Subject<void>();

  protected service: BaseHttpService;
  protected notify: NotifyService;
  protected route: ActivatedRoute;

  protected uid: string;

  public notifyParams: notifyParams;
  public delay: number = 0;
  public model: Generic;
  public data: Generic;

  constructor(protected injector: Injector) {
    this.notify = injector.get(NotifyService);
    this.route = injector.get(ActivatedRoute);

    this.uid = this.route.snapshot.params['uid'];
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.endSubscription.next();
    this.endSubscription.complete();
    // this.service.hasDataChanges.unsubscribe();
  }

  public onEditConfirm(event?): Event {
    let condition = event.data != event.newData;
    let action = this.service.updateData(event.newData);

    return this.confirmationType(condition, action, event);
  }

  public onCreateConfirm(event?): Event {
    let condition = event.data != event.newData;
    let action = this.service.createData(event.newData);

    return this.confirmationType(condition, action, event);
  }

  public onDeleteConfirm(event?): Event {
    let confirmationMsg = 'Are you sure you want to delete?'

    let condition = (window.confirm(confirmationMsg));
    let action = this.service.deleteData(event.data.uid);

    return this.confirmationType(condition, action, event);
  }

  protected getData = () => {
    if (!this.uid || this.uid == 'new') return;

    this.notify.show(null);
    this.service.getOneData(this.uid);

    this.service.hasItemChanges.subscribe({
      next: (res) => this.setData(res),
      error: (err) => this.validateNetwork(err),
      complete: _ => _ ? console.info(_) : undefined,
    });
  };

  protected setData = (data: Generic) => {
    this.data = data as Generic;
  };

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

  public log = (any) => console.info("Logger, value => ", any);

  // protected abstract customOnInit(): void;
}
