import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.css']
})
export class HomeDialogComponent {

  constructor(public dialogRef: MatDialogRef<HomeDialogComponent>) {}

  onClickDownload() {
    this.dialogRef.close({event: 'download'})
  }
  onClickView() {
    this.dialogRef.close({event: 'view'})
  }
}
