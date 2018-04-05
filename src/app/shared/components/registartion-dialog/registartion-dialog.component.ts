import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registartion-dialog',
  templateUrl: './registartion-dialog.component.html',
  styleUrls: ['./registartion-dialog.component.scss']
})
export class RegistartionDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
