import {Component, OnInit} from '@angular/core';
import {VERSION} from '../../../environments/version';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public readonly version: any;

  constructor(public readonly swUpdate: SwUpdate) {
    this.version = VERSION;
  }

  ngOnInit() {
  }

  checkForUpdate(): void {
    this.swUpdate.checkForUpdate().then(evt => {
      console.log('update available');
    }).catch( error => {
      console.log('no update found');
    });
  }

}
