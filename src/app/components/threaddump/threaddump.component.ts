import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Threaddump} from '../../services/threaddump';

@Component({
  selector: 'app-threaddump',
  templateUrl: './threaddump.component.html',
  styleUrls: ['./threaddump.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreaddumpComponent implements OnInit {

  @Input()
  threaddump: Threaddump;

  constructor() {
  }

  ngOnInit() {
  }

}
