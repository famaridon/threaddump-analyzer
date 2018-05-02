import { Component, OnInit } from '@angular/core';
import {AbstractLockSynchronizeEntryComponent} from '../abstract-lock-synchronize-entry.component';
import {LockSynchronizeEntry} from '../../../services/parser/beans/lock.synchronize.entry';

@Component({
  selector: 'app-unknow-lock-synchronize-entity',
  templateUrl: './unknow-lock-synchronize-entity.component.html',
  styleUrls: ['./unknow-lock-synchronize-entity.component.scss']
})
export class UnknowLockSynchronizeEntityComponent extends AbstractLockSynchronizeEntryComponent<LockSynchronizeEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
