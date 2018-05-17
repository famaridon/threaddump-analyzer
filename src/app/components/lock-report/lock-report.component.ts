import {Component, OnDestroy, OnInit} from '@angular/core';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {StoreService} from '../../services/store.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs/index';
import {LockAnalyserService, LockReport} from '../../services/lock-analyser.service';

@Component({
  selector: 'app-lock-report',
  templateUrl: './lock-report.component.html',
  styleUrls: ['./lock-report.component.scss']
})
export class LockReportComponent implements OnInit, OnDestroy {
  private _lidSubscription: Subscription;
  private _lid: string;
  private _$threaddumpListSubscription: Subscription;
  private _$threaddumpList: Observable<Threaddump[]>;
  private _threaddumpList: Threaddump[];
  private _lockReportList: LockReport[];

  constructor(private storeService: StoreService,
              private lockAnalyserService: LockAnalyserService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._lidSubscription = this.route.params.subscribe((params) => {
      this._lid = params['lid'];
      this.updateLockReportList();
    });
    this._$threaddumpList = this.storeService.storage;
    this._$threaddumpListSubscription = this._$threaddumpList.subscribe((threaddumpList) => {
      this._threaddumpList = threaddumpList;
      this.updateLockReportList();
    });
  }

  ngOnDestroy(): void {
    this._lidSubscription.unsubscribe();
  }

  private updateLockReportList() {
    if (this._lid && this._threaddumpList) {
      this.lockAnalyserService.analiseAll(this._lid, this._threaddumpList).then((lockReportList) => {
        this._lockReportList = lockReportList;
      });
    } else {
      this.clearLockReportList();
    }
  }

  private clearLockReportList() {
    this._lockReportList = [];
  }

  get $threaddumpList(): Observable<Threaddump[]> {
    return this._$threaddumpList;
  }

  public getLockReport(threaddump): LockReport {
    return this._lockReportList.find((value: LockReport) => {
      return value.threaddump.id === threaddump.id;
    });
  }

}
