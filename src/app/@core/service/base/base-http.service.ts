import { EventEmitter, Injectable, Injector, OnInit } from "@angular/core";
import { debounceTime, switchMap, take, takeUntil } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { HttpService } from "./http.service";

@Injectable()
export class BaseHttpService extends HttpService implements OnInit {
  public hasDataChanges = new EventEmitter<any[]>();
  public hasItemChanges = new EventEmitter<any[]>();

  protected getAllBySubject = new Subject<void>();
  protected getOneBySubject = new Subject<void>();
  protected endSubscription = new Subject<void>();

  protected provider: HttpClient;
  protected delay: number = 0;
  protected data: any[];
  protected url = '';

  constructor(protected injector: Injector) {
    super(injector);

    this.getOneBySubject
      .pipe(
        takeUntil(this.endSubscription),
        debounceTime(this.delay),
        switchMap((uid: any) => this.getDataByID(uid))
      )
      .subscribe({
        next: this._handlerOneNext,
        error: this._handlerError,
        complete: this._handlerComplete,
      });

    this.getAllBySubject
      .pipe(
        takeUntil(this.endSubscription),
        debounceTime(this.delay),
        switchMap((_) => this.getDataRequest())
      )
      .subscribe({
        next: this._handlerNext,
        error: this._handlerError,
        complete: this._handlerComplete,
      });
  }

  ngOnInit(): void {
    this.getAllBySubject.next();
  }

  public refreshData() {
    this.getAllBySubject.next();
  }

  public getOneData(uid: any) {
    this.getOneBySubject.next(uid);
  }

  public createData(data: any): any {
    return this.createDataRequest(data);
  }

  public updateData(data: any): any {
    return this.updateDataRequest(data);
  }

  public deleteData(uid: string): any {
    return this.deleteDataRequest(uid);
  }

  protected getDataByID(id: string | number): any {
    return super.getOne<any>(this.url, id).pipe(take(1));
  }

  protected getDataRequest(): any {
    return super.getAll<any>(this.url).pipe(take(1));
  }

  protected createDataRequest(data: any) {
    return super.create<any>(this.url, data).pipe(take(1));
  }

  protected updateDataRequest(data: any) {
    return super.update<any>(this.url, data).pipe(take(1));
  }

  protected deleteDataRequest(uid: string) {
    return super.delete(this.url, uid).pipe(take(1));
  }

  protected _handlerComplete = () => console.info("complete");
  protected _handlerError = (err: any) => console.error("error", err);

  protected _handlerNext = (response: any) => {
    if (response.body) this.hasDataChanges.emit(response.body);
    else this.hasDataChanges.error(response);
  };

  protected _handlerOneNext = (response: any) => {
    if (response.body) this.hasItemChanges.emit(response.body);
    else this.hasItemChanges.error(response);
  };
}
