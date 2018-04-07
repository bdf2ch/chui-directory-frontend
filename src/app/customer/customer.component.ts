import { Component, OnInit } from '@angular/core';
import {ITransaction} from "../shared/interfaces/transaction.interface";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public transactions: ITransaction[] = [];
  displayedColumns = ['date', 'time', 'amount', 'status'];

  constructor() {
    this.transactions = [
      {
        date: '02 April 2018',
        time: '15:55',
        amount: 45,
        status: 'Done'
      },
      {
        date: '03 April 2018',
        time: '10:19',
        amount: 12,
        status: 'Done'
      },
      {
        date: '03 April 2018',
        time: '00:24',
        amount: 10,
        status: 'Processing'
      },
      {
        date: '04 April 2018',
        time: '14:00',
        amount: 21,
        status: 'Done'
      },
      {
        date: '05 April 2018',
        time: '08:01',
        amount: 39,
        status: 'Processing'
      }
    ];
  }

  ngOnInit() {
  }

}
