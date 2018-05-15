import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadDialogComponent} from '../upload-dialog/upload-dialog.component';
import {StoreService} from '../../services/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public storeService: StoreService,
              public dialog: MatDialog,
              public router: Router) {

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

}
