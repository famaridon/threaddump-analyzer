import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {HtmlRendererService} from '../../services/html-renderer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {Observable} from 'rxjs/Observable';
import {Thread} from '../../services/parser/beans/thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {

  private _tidSubscription: Subscription;
  private _tid: string;
  private _$threaddumpList: Observable<Threaddump[]>;

  constructor(private storeService: StoreService,
              private htmlRendererService: HtmlRendererService,
              private route: ActivatedRoute) {

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

  public getThread(threaddump: Threaddump): Thread | undefined {
    return threaddump.threads.find((t) => {
      return t.id === this._tid;
    });
  }
}
