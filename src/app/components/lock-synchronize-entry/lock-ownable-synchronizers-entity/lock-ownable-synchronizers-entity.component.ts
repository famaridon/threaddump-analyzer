import {Component, OnInit} from '@angular/core';
import {AbstractLockSynchronizeEntryComponent} from '../abstract-lock-synchronize-entry.component';
import {LockOwnableSynchronizersEntry} from '../../../services/parser/beans/lock.synchronize.entry';

@Component({
  selector: 'app-lock-ownable-synchronizers-entity',
  templateUrl: './lock-ownable-synchronizers-entity.component.html',
  styleUrls: ['./lock-ownable-synchronizers-entity.component.scss']
})
export class LockOwnableSynchronizersEntityComponent
  extends AbstractLockSynchronizeEntryComponent<LockOwnableSynchronizersEntry>
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
