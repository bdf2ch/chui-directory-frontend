import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceHandler, ResourceRequestMethod, IResourceMethod } from '@ngx-resource/core';
import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response.model';
import { Advertiser } from '../models/advertiser.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';

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
