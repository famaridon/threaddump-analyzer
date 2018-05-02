import { Component, OnInit } from '@angular/core';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';
import {LockStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-lock-stack-entry',
  templateUrl: './lock-stack-entry.component.html',
  styleUrls: ['./lock-stack-entry.component.scss']
})
export class LockStackEntryComponent extends AbstractStackEntryComponent<LockStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
