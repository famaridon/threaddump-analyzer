import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lock-link',
  templateUrl: './lock-link.component.html',
  styleUrls: ['./lock-link.component.scss']
})
export class LockLinkComponent implements OnInit {

  @Input()
  public lock: string;
  constructor() { }

  ngOnInit() {
  }

}
