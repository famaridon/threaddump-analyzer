import {Component, OnInit} from '@angular/core';
import {AbstractStackEntryComponent, } from '../abstract-stack-entry.component';
import {AtStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-at-stack-entry',
  templateUrl: './at-stack-entry.component.html',
  styleUrls: ['./at-stack-entry.component.scss']
})
export class AtStackEntryComponent extends AbstractStackEntryComponent<AtStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
