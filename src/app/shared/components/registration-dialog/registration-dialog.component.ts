import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registartion-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent implements OnInit {
  registrationData: any;

  constructor(private dialog: MatDialog) {
    this.registrationData = {
      phone: '',
      password: '',
      repeatPassword: '',
      termsAccepted: false,
      secondStep: false,
      code: ''
    };
  }

  ngOnInit() {
  }

}
