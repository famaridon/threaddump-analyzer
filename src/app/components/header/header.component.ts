import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadDialogComponent} from '../upload-dialog/upload-dialog.component';
import {StoreService} from '../../services/store.service';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _storage: Observable<Promise<Threaddump>[]>;
  private _threaddumps: Promise<Threaddump>[];

  constructor(public storeService: StoreService,
              public dialog: MatDialog,
              public router: Router) {
    this._storage = this.storeService.storage;
    this._storage.subscribe((threaddumps) => {
      this._threaddumps = threaddumps;
    });
  }

  ngOnInit() {
  }

  public clearStore(): void {
    this.storeService.clear();
    this.router.navigate(['/']);
  }

  public openDialog(): void {
    this.dialog.open(UploadDialogComponent, {});
  }

  get threaddumps(): Promise<Threaddump>[] {
    return this._threaddumps;
  }
}
