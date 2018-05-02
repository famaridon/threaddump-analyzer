import { Component, OnInit } from '@angular/core';
import {AbstractLockSynchronizeEntryComponent} from '../abstract-lock-synchronize-entry.component';
import {NoneLockSynchronizeEntry} from '../../../services/parser/beans/lock.synchronize.entry';

@Component({
  selector: 'app-none-lock-synchronize-entity',
  templateUrl: './none-lock-synchronize-entity.component.html',
  styleUrls: ['./none-lock-synchronize-entity.component.scss']
})
export class NoneLockSynchronizeEntityComponent extends AbstractLockSynchronizeEntryComponent<NoneLockSynchronizeEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
