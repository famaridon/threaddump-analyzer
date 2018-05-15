import { Component, OnInit } from '@angular/core';
import {WaitingOnStackEntry} from '../../../services/parser/beans/stack.entry';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';

@Component({
  selector: 'app-waiting-on-stack-entry',
  templateUrl: './waiting-on-stack-entry.component.html',
  styleUrls: ['./waiting-on-stack-entry.component.scss']
})
export class WaitingOnStackEntryComponent extends AbstractStackEntryComponent<WaitingOnStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
