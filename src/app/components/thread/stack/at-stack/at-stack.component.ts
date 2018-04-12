import {Component, OnInit} from '@angular/core';
import {AbstractStackComponent} from '../abstract-stack.component';
import {AtStackEntry} from '../../../../services/stack.entry';

@Component({
  selector: 'app-at-stack',
  templateUrl: './at-stack.component.html',
  styleUrls: ['./at-stack.component.css']
})
export class AtStackComponent extends AbstractStackComponent<AtStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
