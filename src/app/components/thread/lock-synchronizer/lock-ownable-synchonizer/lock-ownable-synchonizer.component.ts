import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractLockSynchronizerComponent} from '../abstract-lock-synchronizer.component';
import {LockOwnableSynchronizersEntry, NoneLockSynchronizeEntry} from '../../../../services/lock.synchronize.entry';

@Component({
  selector: 'app-lock-ownable-synchonizer',
  templateUrl: './lock-ownable-synchonizer.component.html',
  styleUrls: ['./lock-ownable-synchonizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockOwnableSynchonizerComponent extends AbstractLockSynchronizerComponent<LockOwnableSynchronizersEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

