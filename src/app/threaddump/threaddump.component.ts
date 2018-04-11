import {Component, Input, OnInit} from '@angular/core';
import {Threaddump} from '../services/parser.service';

@Component({
  selector: 'app-threaddump',
  templateUrl: './threaddump.component.html',
  styleUrls: ['./threaddump.component.css']
})
export class ThreaddumpComponent implements OnInit {

  @Input()
  threaddump: Threaddump;

  constructor() {
  }

  ngOnInit() {
  }

}
