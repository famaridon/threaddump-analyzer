import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {State} from '../../services/parser/beans/thread';

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
export class MergedThreadsListComponent implements OnInit {

  public items: Promise<MergedThreadItem[]>;
  private _threaddumps: Threaddump[] | null;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.storage.subscribe((threaddumps$: Promise<Threaddump>[]) => {
      this.items = new Promise<MergedThreadItem[]>((resolve) => {
        const items$ = new Map<string, MergedThreadItem>();
        Promise.all(threaddumps$).then((threaddumps) => {
          this._threaddumps = threaddumps;
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

    });
  }


  get threaddumps(): Threaddump[] | null {
    return this._threaddumps;
  }

}
