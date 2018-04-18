import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractStackComponent} from '../abstract-stack.component';
import {StackEntry} from '../../../../services/stack.entry';

@Component({
  selector: 'app-unknown-stack',
  templateUrl: './unknown-stack.component.html',
  styleUrls: ['./unknown-stack.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnknownStackComponent extends AbstractStackComponent<StackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
