import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  loginData: any;

  constructor(private router: Router,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<AuthDialogComponent>) {
    this.loginData = {
      phone: '',
      password: ''
    };
  }

  ngOnInit() {
  }


  signIn() {
    this.router.navigate(['/customer']);
    this.dialogRef.close();
  }
}
