import {Component, OnInit} from '@angular/core';
import {VERSION} from '../../../environments/version';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public readonly version: any;
  private snackBarConfig: any;
  public updateAvailable = false;

  constructor(public readonly swUpdate: SwUpdate,
              public snackbar: MatSnackBar) {
    this.version = VERSION;
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = 6000;
    this.snackBarConfig.horizontalPosition = 'center';
    this.snackBarConfig.verticalPosition = 'top';

    this.swUpdate.available.subscribe(evt => {
      this.updateAvailable = true;
      const snack = this.snackbar.open('Update Available', 'Reload', this.snackBarConfig);

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

    });
    this.swUpdate.activated.subscribe(event => {
      this.snackbar.open('Application updated', '', this.snackBarConfig);
    });
  }

  ngOnInit() {
  }

  update(): void {
    window.location.reload();
  }

  checkForUpdate(): void {
    const snack = this.snackbar.open('Checking for update', '', Object.assign(this.snackBarConfig, {duration: 1000}));
    this.swUpdate.checkForUpdate().then(evt => {
    }).catch(error => {
      snack.dismiss();
      this.snackbar.open('Can`\'t check for update', '', Object.assign(this.snackBarConfig, {duration: 100}));
    });
  }

}
