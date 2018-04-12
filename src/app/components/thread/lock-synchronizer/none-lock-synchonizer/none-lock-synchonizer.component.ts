import { Component, OnInit } from '@angular/core';
import {AbstractLockSynchronizerComponent} from '../abstract-lock-synchronizer.component';
import {LockSynchronizeEntry, NoneLockSynchronizeEntry} from '../../../../services/lock.synchronize.entry';

@Component({
  selector: 'app-none-lock-synchonizer',
  templateUrl: './none-lock-synchonizer.component.html',
  styleUrls: ['./none-lock-synchonizer.component.css']
})
export class NoneLockSynchonizerComponent extends AbstractLockSynchronizerComponent<NoneLockSynchronizeEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
