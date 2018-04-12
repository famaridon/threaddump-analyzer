import {Component, Input, OnInit} from '@angular/core';
import {LockOwnableSynchronizersEntry} from '../../../services/lock.synchronize.entry';

@Component({
  selector: 'app-lock-synchronizer',
  templateUrl: './lock-synchronizer.component.html',
  styleUrls: ['./lock-synchronizer.component.css']
})
export class LockSynchronizerComponent implements OnInit {

  @Input()
  public lockSynchronize: LockOwnableSynchronizersEntry;

  constructor() { }

  ngOnInit() {
  }

}
