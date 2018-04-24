import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Threaddump} from '../../services/threaddump';
import {Status} from 'tslint/lib/runner';
import {State} from '../../services/thread';

@Component({
  selector: 'app-thread-tree',
  templateUrl: './thread-tree.component.html',
  styleUrls: ['./thread-tree.component.scss']
})
export class ThreadTreeComponent implements OnInit {

  public items: Promise<ThreadListItem[]>;
  public threaddumps: Threaddump[];

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.storage.subscribe((threaddumps$: Promise<Threaddump>[]) => {
      this.items = new Promise<ThreadListItem[]>((resolve) => {
        const items$ = new Map<string, ThreadListItem>();
        Promise.all(threaddumps$).then((threaddumps) => {
          this.threaddumps = threaddumps;
          threaddumps.forEach((threaddump) => {
            threaddump.threads.forEach((thread) => {
              let threadListItem = items$.get(thread.id);
              if (!threadListItem) {
                threadListItem = new ThreadListItem(thread.id, thread.name);
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

}

export class ThreadListItem {
  public readonly id: string;
  public readonly name: string;
  public readonly states: Map<Threaddump, State>;


  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.states = new Map<Threaddump, State>();
  }
}
