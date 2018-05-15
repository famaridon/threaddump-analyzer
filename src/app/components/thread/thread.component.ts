import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {ActivatedRoute} from '@angular/router';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {Thread} from '../../services/parser/beans/thread';
import { Observable,  Subscription} from 'rxjs/index';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {

  private _pathParamsSubscription: Subscription;
  private _queryParamsSubscription: Subscription;
  private _tid: string;
  private _tdindex: string;
  private _$threaddumpList: Observable<Threaddump[]>;

  constructor(private storeService: StoreService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._pathParamsSubscription = this.route.params.subscribe((params) => {
      this._tid = params['tid'];
    });
    this._queryParamsSubscription = this.route.queryParams.subscribe( (queryParams) => {
      this._tdindex = queryParams['tdindex'];
    });
    this._$threaddumpList = this.storeService.storage;
  }

  ngOnDestroy(): void {
    this._pathParamsSubscription.unsubscribe();
    this._queryParamsSubscription.unsubscribe();
  }

  get tdindex(): string {
    return this._tdindex;
  }

  get $threaddumpList(): Observable<Threaddump[]> {
    return this._$threaddumpList;
  }

  public getThread(threaddump: Threaddump): Thread | undefined {
    return threaddump.threads.find((t) => {
      return t.id === this._tid;
    });
  }


}
