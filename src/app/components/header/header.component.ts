import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadDialogComponent} from '../upload-dialog/upload-dialog.component';
import {StoreService} from '../../services/store.service';
import {Threaddump} from '../../services/threaddump';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _storage: Map<string, Promise<Threaddump>>;

  constructor(public storeService: StoreService, public dialog: MatDialog) {
    this._storage = this.storeService.storage;
  }

  ngOnInit() {
  }

  public openDialog(): void {
    this.dialog.open(UploadDialogComponent, { });
  }


  get storage(): Map<string, Promise<Threaddump>> {
    return this._storage;
  }
}
