import {Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../../services/thread';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {
  @Input()
  public thread: Thread;

  constructor() {
  }

  ngOnInit() {
  }

}
