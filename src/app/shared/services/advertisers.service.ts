import { Injectable } from '@angular/core';
import { AdvertisersResource } from '../resources/advertisers-resource.service';
import { Advertiser } from '../models/advertiser.model';
import { IResponse } from '../models/response.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';
import { ILocation } from '../interfaces/location.interface';
import { MarkerOptions } from '@agm/core/services/google-maps-types';
import { IndustriesService } from './industries.service';
import {IViewport} from "../interfaces/viewport.interface";

@Injectable()
export class AdvertisersService {
  private advertisers: Advertiser[];
  private markers: MarkerOptions[];
  private lookupOptions: Advertiser[];
  private selectedAdvertiser: Advertiser | null;

  constructor(private advertisersResource: AdvertisersResource,
              private industries: IndustriesService) {
    this.advertisers = [];
    this.markers = [];
    this.lookupOptions = [];
    this.selectedAdvertiser = null;
  }


  /**
   * Returns list of advertisers
   * @returns {Advertiser[]}
   */
  getList(): Advertiser[] {
    return this.advertisers;
  }


  getSelected(): Advertiser | null {
    return this.selectedAdvertiser;
  }


  getMarkers(): MarkerOptions[] {
    return this.markers;
  }


  getLookupOptions(): Advertiser[] {
    return this.lookupOptions;
  }


  add(advertiser: Advertiser) {
    this.advertisers.push(advertiser);
  }


  clear() {
    this.advertisers = [];
  }


  select(advertiser: Advertiser | null) {
    this.selectedAdvertiser = advertiser;
  }


  async fetchByFilter(viewport: IViewport, includePlacesData: boolean): Promise<Advertiser[]> {
    const response: IResponse<IAdvertiser[]> = await this.advertisersResource.getByFilter(
      {},
      {
        query: {industry: this.industries.getSelectedIndustriesIds()},
        viewport: viewport,
        includePlacesData: includePlacesData
      },
      null,
      null
    );
    console.log(response);
    if (response.isSuccess) {
      response.response['list'].forEach((item: IAdvertiser) => {
        const advertiser = new Advertiser(item);
        this.advertisers.push(advertiser);
        /*
        this.markers.push({
          label: '',
          clickable: true,
          draggable: false,
          position: {
            lat: advertiser.company.place.geometry.location.lat,
            lng: advertiser.company.place.geometry.location.lng
          },
          icon: advertiser.company.place.icon
        });
        */
      });
    }
    return this.advertisers;
  }


  async fetchById(id: string): Promise<Advertiser | null> {
    const response: IResponse<IAdvertiser> = await this.advertisersResource.getById({id: id});
    return response.isSuccess ? new Advertiser(response.response) : null;
  }


  async fetchByViewport(viewport: IViewport, includePlacesData: boolean): Promise<Advertiser[]> {
    const params = {
      query: {viewport: viewport},
      includePlacesData: includePlacesData
    };
    const response: IResponse<IAdvertiser[]> = await this.advertisersResource.getByViewport({}, params, null, null);
    console.log(response);
    if (response.isSuccess) {
      response.response['list'].forEach((item: IAdvertiser) => {
        const advertiser = new Advertiser(item);
        this.advertisers.push(advertiser);
        this.markers.push({
          label: '',
          title: advertiser.company.name,
          clickable: true,
          draggable: false,
          position: {
            lat: advertiser.company.place.geometry.location.lat,
            lng: advertiser.company.place.geometry.location.lng
          },
          icon: advertiser.company.place.icon
        });
      });
    }
    return this.advertisers;
  }


  async search(query: string, includePlacesData: boolean): Promise<Advertiser[]> {
    const queryString = {
      '$or': [
        {'name.regexp': query},
        {'location.regexp': query}
      ]
    };
    this.lookupOptions = [];
    const response: IResponse<IAdvertiser[]> = await this.advertisersResource.search(
      {},
      {query: {company: queryString}, includePlacesData: includePlacesData},
      null,
      null
    );
    console.log(response);
    if (response.isSuccess) {
      response.response['list'].forEach((item: IAdvertiser) => {
        const advertiser = new Advertiser(item);
        //this.advertisers.push(advertiser);
        this.lookupOptions.push(advertiser);
        this.markers.push({
          label: '',
          title: advertiser.company.name,
          clickable: true,
          draggable: false,
          position: {
            lat: advertiser.company.place.geometry.location.lat,
            lng: advertiser.company.place.geometry.location.lng
          },
          icon: advertiser.company.place.icon
        });
      });
    }
    return this.advertisers;
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
