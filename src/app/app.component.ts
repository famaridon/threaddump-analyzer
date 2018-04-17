import {Component} from '@angular/core';
import {ParserService, Threaddump} from './services/parser.service';
import {MatDialog} from '@angular/material';
import {StoreService} from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public threaddumps: Threaddump[] = [];
  public selectedThreaddump: Threaddump;

  constructor() {
  }


}
