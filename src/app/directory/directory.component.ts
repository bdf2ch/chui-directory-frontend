import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../shared/components/registration-dialog/registration-dialog.component';
import { AuthDialogComponent } from '../shared/components/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openRegisterDialog() {
    this.dialog.open(RegistrationDialogComponent, {
      width: '370px'
    });
  }


  openAuthDialog() {
    this.dialog.open(AuthDialogComponent, {
      width: '370px'
    });
  }

}
