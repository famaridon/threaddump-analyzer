import { Component, OnInit } from '@angular/core';
import {AbstractStackComponent} from '../abstract-stack.component';

@Component({
  selector: 'app-waiting-to-lock-stack',
  templateUrl: './waiting-to-lock-stack.component.html',
  styleUrls: ['./waiting-to-lock-stack.component.css']
})
export class WaitingToLockStackComponent extends AbstractStackComponent<WaitingToLockStackComponent> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
