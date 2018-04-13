import { Injectable } from '@angular/core';
import {
  Resource, ResourceParams, ResourceAction, ResourceHandler, ResourceRequestMethod, IResourceMethod, IResourceMethodStrict
} from '@ngx-resource/core';
import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response.model';
import { Advertiser } from '../models/advertiser.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';
import { IViewport } from '../interfaces/viewport.interface';

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
    path: '/advertiser'
  })
  getByFilter: IResourceMethodStrict<{}, {query: {industry: string[]}, viewport: IViewport, includePlacesData: boolean}, void, IResponse<IAdvertiser[]>>;


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!id}'
  })
  getById: IResourceMethod<{id: string}, IResponse<IAdvertiser>>;

  // TODO: Add type annotations.

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/advertiser',
  })
  getByViewport: IResourceMethodStrict<{}, {query: {viewport: IViewport}, includePlacesData: boolean}, void, IResponse<IAdvertiser[]>>;


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/advertiser'
  })
  search: IResourceMethodStrict<{}, {query: {company: any}, includePlacesData: boolean}, void, IResponse<IAdvertiser[]>>;


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
