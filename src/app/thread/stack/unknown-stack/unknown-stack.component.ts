import {Component, OnInit} from '@angular/core';
import {StackComponentRender} from '../stack.component';
import {StackEntry} from '../../../analyzer.service';
import {AbstractStackComponent} from '../abstract-stack.component';

@Component({
  selector: 'app-unknown-stack',
  templateUrl: './unknown-stack.component.html',
  styleUrls: ['./unknown-stack.component.css']
})
export class UnknownStackComponent extends AbstractStackComponent<StackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
