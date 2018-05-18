import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.duration = 6000;
    snackBarConfig.horizontalPosition = 'center';
    snackBarConfig.verticalPosition = 'top';

    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Update Available', 'Reload', snackBarConfig);

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

    });
    this.swUpdate.activated.subscribe(event => {
      const snack = this.snackbar.open('Application updated', snackBarConfig);

    });
  }
}
