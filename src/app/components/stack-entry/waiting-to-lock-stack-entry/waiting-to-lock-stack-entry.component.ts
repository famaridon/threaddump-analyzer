import { Component, OnInit } from '@angular/core';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';
import {WaitingToLockStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-waiting-to-lock-stack-entry',
  templateUrl: './waiting-to-lock-stack-entry.component.html',
  styleUrls: ['./waiting-to-lock-stack-entry.component.scss']
})
export class WaitingToLockStackEntryComponent extends AbstractStackEntryComponent<WaitingToLockStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
