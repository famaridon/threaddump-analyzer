import { Component, OnInit } from '@angular/core';
import {AbstractStackEntryComponent} from '../abstract-stack-entry.component';
import {UnknowStackEntry} from '../../../services/parser/beans/stack.entry';

@Component({
  selector: 'app-unknow-stack-entry',
  templateUrl: './unknow-stack-entry.component.html',
  styleUrls: ['./unknow-stack-entry.component.scss']
})
export class UnknowStackEntryComponent extends AbstractStackEntryComponent<UnknowStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
