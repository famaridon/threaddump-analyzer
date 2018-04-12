import { Component, OnInit } from '@angular/core';
import {AbstractLockSynchronizerComponent} from '../abstract-lock-synchronizer.component';
import {LockSynchronizeEntry} from '../../../../services/lock.synchronize.entry';

@Component({
  selector: 'app-unknonwn-lock-synchonizer',
  templateUrl: './unknonwn-lock-synchonizer.component.html',
  styleUrls: ['./unknonwn-lock-synchonizer.component.css']
})
export class UnknonwnLockSynchonizerComponent extends AbstractLockSynchronizerComponent<LockSynchronizeEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
