import { Component, OnInit } from '@angular/core';
import {AbstractStackComponent} from '../abstract-stack.component';
import {SimpleStackEntry} from '../../../services/parser.service';

@Component({
  selector: 'app-locked-stack',
  templateUrl: './locked-stack.component.html',
  styleUrls: ['./locked-stack.component.css']
})
export class LockedStackComponent extends AbstractStackComponent<SimpleStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
