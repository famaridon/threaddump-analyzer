import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StoreService} from '../../services/store.service';
import {ParserService} from '../../services/parser.service';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  public files: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parserService: ParserService,
    private storeService: StoreService) {
  }

  onAddClick($event: Event): void {

    this.files.forEach((file) => {
      const promise = this.parserService.load(file);
      this.storeService.save(promise);
    });

    this.dialogRef.close();
  }

  onExitClick($event: Event): void {
    this.dialogRef.close();
  }

  public remove(file: File) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }

  public onFileChange(event: Event): void {
    const input = <HTMLInputElement>event.target;
    if (input.files && input.files.length > 0) {
      for (let i = 0; i < input.files.length; i++) {
        this.files.push(input.files[i]);
      }
    }
  }

  ngOnInit(): void {
  }

}
