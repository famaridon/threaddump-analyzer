import { Component, OnInit } from '@angular/core';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';
import {WaitingOnStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-parking-to-wait-for-stack-entry',
  templateUrl: './parking-to-wait-for-stack-entry.component.html',
  styleUrls: ['./parking-to-wait-for-stack-entry.component.scss']
})
export class ParkingToWaitForStackEntryComponent extends AbstractStackEntryComponent<WaitingOnStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
