import { Injectable } from '@angular/core';
import { AdvertisersResource } from '../resources/advertisers-resource.service';
import { Advertiser } from '../models/advertiser.model';
import { IResponse } from '../models/response.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';

@Injectable()
export class AdvertisersService {
  private advertisers: Advertiser[];

  constructor(private advertisersResource: AdvertisersResource) {
    this.advertisers = [
      new Advertiser(),
      new Advertiser(),
      new Advertiser(),
      new Advertiser(),
      new Advertiser()
    ];
  }


  /**
   * Returns list of advertisers
   * @returns {Advertiser[]}
   */
  getList(): Advertiser[] {
    return this.advertisers;
  }


  async fetchByFilter(query: string, page: string, limit: string): Promise<void> {
    const response: IResponse<IAdvertiser[]> = await this.advertisersResource.getByFilter({query: query, page: page, limit: limit});
    if (response.isSuccess) {
      response.response.forEach((item: IAdvertiser) => {
        const advertiser = new Advertiser(item);
        this.advertisers.push(advertiser);
      });
    }
  }


  async fetchById(id: string): Promise<Advertiser | null> {
    const response: IResponse<IAdvertiser> = await this.advertisersResource.getById({id: id});
    return response.isSuccess ? new Advertiser(response.response) : null;
  }


  async activateById(id: string, advertiser: Advertiser): Promise<boolean> {
    const response: IResponse<IAdvertiser> = await this.advertisersResource.activateById({id: id, advertiser: advertiser});
    return response.isSuccess ? true : false;
  }


  async approveById(id: string): Promise<boolean> {
    const response: IResponse<IAdvertiser> = await this.advertisersResource.approveById({id: id});
    return response.isSuccess ? true : false;
  }
}