import { Injectable } from '@angular/core';
import { IndustriesResource } from '../resources/industries-resource.service';
import { IResponse } from '../models/response.model';
import { Industry } from '../models/industry.model';
import { IIndustry } from '../interfaces/industry.interface';

@Injectable()
export class IndustriesService {
  private industries: Industry[];

  constructor(private industriesResource: IndustriesResource) {
    this.industries = [];
  }

  fetch(): void {
    this.industriesResource.getList().then((result: IResponse<Industry[]>) => {
      console.log(result);
      if (result.isSuccess) {
        result.response.forEach((item: IIndustry) => {
          const industry = new Industry(item);
          this.industries.push(industry);
        });
      }
    });
  };

}
