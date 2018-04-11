import {Component, OnInit} from '@angular/core';
import {AbstractStackComponent} from '../abstract-stack.component';
import {SimpleStackEntry} from '../../../services/parser.service';

@Component({
  selector: 'app-simple-stack',
  templateUrl: './simple-stack.component.html',
  styleUrls: ['./simple-stack.component.css']
})
export class SimpleStackComponent extends AbstractStackComponent<SimpleStackEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
