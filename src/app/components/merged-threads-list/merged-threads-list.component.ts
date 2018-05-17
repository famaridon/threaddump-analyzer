import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {State} from '../../services/parser/beans/thread';
import {Observable, Subscription} from 'rxjs/index';
import {Router} from '@angular/router';

export class MergedThreadItem {
  public readonly id: string;
  public readonly name: string;
  public readonly states: Map<Threaddump, State>;


  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.states = new Map<Threaddump, State>();
  }
}

@Component({
  selector: 'app-merged-threads-list',
  templateUrl: './merged-threads-list.component.html',
  styleUrls: ['./merged-threads-list.component.scss']
})
export class MergedThreadsListComponent implements OnInit, OnDestroy {

  public items: Promise<MergedThreadItem[]>;
  private _$threaddumps: Observable<Threaddump[]>;
  private _$threaddumpsSubscription: Subscription;

  constructor(private storeService: StoreService,
              private router: Router) {
  }

  ngOnInit() {
    this._$threaddumps = this.storeService.storage;
    this._$threaddumps.subscribe((threaddumps: Threaddump[]) => {
      if (threaddumps.length === 0) {
        this.router.navigate(['/']);
      }
      this.items = new Promise<MergedThreadItem[]>((resolve) => {

        const items$ = new Map<string, MergedThreadItem>();
        threaddumps.forEach((threaddump) => {
          threaddump.threads.forEach((thread) => {
            let threadListItem = items$.get(thread.id);
            if (!threadListItem) {
              threadListItem = new MergedThreadItem(thread.id, thread.name);
              items$.set(thread.id, threadListItem);
            }
            threadListItem.states.set(threaddump, thread.state);
          });
        });
        resolve(Array.from(items$.values()).sort((a, b) => {
          return a.name.localeCompare(b.name);
        }));

      });
    });
  }

  ngOnDestroy(): void {
    this._$threaddumpsSubscription.unsubscribe();
  }


  get $threaddumps(): Observable<Threaddump[]> {
    return this._$threaddumps;
  }
}
