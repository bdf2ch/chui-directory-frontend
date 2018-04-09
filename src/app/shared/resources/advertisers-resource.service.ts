import { Injectable } from '@angular/core';
import {
  Resource,
  ResourceParams,
  ResourceAction,
  ResourceHandler,
  ResourceRequestMethod,
  IResourceMethod,
  IResourceMethodStrict
} from "@ngx-resource/core";
import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response.model';
import { Advertiser } from '../models/advertiser.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';
import {IGeoPoint} from "../interfaces/geo-point.interface";

@Injectable()
@ResourceParams({
  pathPrefix: environment.webApiUrlPrefix
})
export class AdvertisersResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/advertiser/industry'
  })
  getByFilter: IResourceMethod<{query: string, page: string, limit: string}, IResponse<IAdvertiser[]>>;


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!id}'
  })
  getById: IResourceMethod<{id: string}, IResponse<IAdvertiser>>;


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/advertiser',
  })
  getByGeoPoint: IResourceMethodStrict<{}, {query: {geopoint: string}, includePlacesData: boolean}, void, IResponse<IAdvertiser[]>>;


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/advertiser'
  })
  search: IResourceMethodStrict<{}, {query: {company: string}}, void, IResponse<IAdvertiser[]>>;


  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}/activate'
  })
  activateById: IResourceMethod<{id: string, advertiser: Advertiser}, IResponse<IAdvertiser>>;


  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}/management/approve'
  })
  approveById: IResourceMethod<{id: string}, IResponse<IAdvertiser>>;
}
