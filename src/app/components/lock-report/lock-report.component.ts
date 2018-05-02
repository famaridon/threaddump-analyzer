import {Component, OnDestroy, OnInit} from '@angular/core';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {Observable} from 'rxjs/Observable';
import {StoreService} from '../../services/store.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-lock-report',
  templateUrl: './lock-report.component.html',
  styleUrls: ['./lock-report.component.scss']
})
export class LockReportComponent implements OnInit, OnDestroy {
  private _lidSubscription: Subscription;
  private _lid: string;
  private _$threaddumpList: Observable<Threaddump[]>;

  constructor(private storeService: StoreService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._lidSubscription = this.route.params.subscribe((params) => {
      this._lid = params['lid'];
    });
    this._$threaddumpList = this.storeService.storage;
  }

  ngOnDestroy(): void {
    this._lidSubscription.unsubscribe();
  }


  get $threaddumpList(): Observable<Threaddump[]> {
    return this._$threaddumpList;
  }

}
