import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {HtmlRendererService} from '../../services/html-renderer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {

  private _tidSubscription: Subscription;
  private _tid: string;
  private _$threaddumpList: Observable<Threaddump[]> = [];

  constructor(private storeService: StoreService,
              private htmlRendererService: HtmlRendererService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this._tidSubscription = this.route.params.subscribe((params) => {
      this._tid = params['tid'];
    });
    this._$threaddumpList = this.storeService.storage;
  }

  ngOnDestroy(): void {
    this._tidSubscription.unsubscribe();
  }


  get $threaddumpList(): Observable<Threaddump[]> {
    return this._$threaddumpList;
  }
}
