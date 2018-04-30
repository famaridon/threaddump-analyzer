import { Component, OnInit } from '@angular/core';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';
import {LockedStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-locked-stack-entry',
  templateUrl: './locked-stack-entry.component.html',
  styleUrls: ['./locked-stack-entry.component.scss']
})
export class LockedStackEntryComponent extends AbstractStackEntryComponent<LockedStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
