import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceHandler, ResourceRequestMethod, IResourceMethod } from '@ngx-resource/core';
import { environment } from '../../../environments/environment';
import { Industry } from '../models/industry.model';
import { IResponse } from '../models/response.model';

@Injectable()
@ResourceParams({
  pathPrefix: environment.webApiUrlPrefix
})
export class IndustriesResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/industry'
  })
  getList: IResourceMethod<void, IResponse<Industry[]>>;
}
