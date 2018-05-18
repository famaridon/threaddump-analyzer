import {Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../services/parser/beans/thread';
import {Threaddump} from '../../services/parser/beans/threaddump';

@Component({
  selector: 'app-thread-link',
  templateUrl: './thread-link.component.html',
  styleUrls: ['./thread-link.component.scss']
})
export class ThreadLinkComponent implements OnInit {

  @Input()
  public thread: Thread;
  @Input()
  public threaddump: Threaddump;

  constructor() { }

  ngOnInit() {
  }

}
