import { Component, Input, OnInit } from '@angular/core';
import { Advertiser } from '../../shared/models/advertiser.model';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
  @Input() advertiser: Advertiser;

  constructor() {}


  ngOnInit() {
  }

}
