import { Injectable } from '@angular/core';
import { Advertiser } from '../models/advertiser.model';

@Injectable()
export class AdvertisersService {
  private advertisers: Advertiser[];

  constructor() {
    this.advertisers = [new Advertiser(), new Advertiser(), new Advertiser(), new Advertiser(), new Advertiser()];
  }


  /**
   * Returns list of advertisers
   * @returns {Advertiser[]}
   */
  getList(): Advertiser[] {
    return this.advertisers;
  }
}
