import { Component, Input, OnInit } from '@angular/core';
import { Advertiser } from '../../shared/models/advertiser.model';


@Component({
  selector: 'app-advertisers-list',
  templateUrl: './advertisers-list.component.html',
  styleUrls: ['./advertisers-list.component.scss']
})
export class AdvertisersListComponent implements OnInit {
  @Input() advertisers: Advertiser[];


  constructor() { }

  ngOnInit() {
  }

}
