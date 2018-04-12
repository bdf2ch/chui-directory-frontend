import { Injectable } from '@angular/core';
import { IndustriesResource } from '../resources/industries-resource.service';
import { IResponse } from '../models/response.model';
import { Industry } from '../models/industry.model';
import { IIndustry } from '../interfaces/industry.interface';
import {IndustryFilter} from "../models/industry-filter.model";


@Injectable()
export class IndustriesService {
  private industries: Industry[];
  public isFetchingData: boolean;


  /**
   * Constructor
   * @param {IndustriesResource} industriesResource
   */
  constructor(private industriesResource: IndustriesResource) {
    this.industries = [];
    this.isFetchingData = false;
  }


  /**
   * Fetches industries from backend
   */
  fetch(): void {
    this.isFetchingData = true;
    this.industriesResource.getList().then((result: IResponse<Industry[]>) => {
      this.isFetchingData = false;
      if (result.isSuccess) {
        result.response.forEach((item: IIndustry) => {
          const industry = new Industry(item);
          this.industries.push(industry);
        });
      }
    });
  }


  /**
   * Returns list of industries
   * @returns {Industry[]}
   */
  getList(): Industry[] {
    return this.industries;
  }


  getSelectedIndustriesIds(): string[] {
    const filterIds: string[] = [];
    this.industries.forEach((industry: Industry) => {
      industry.children.forEach((filter: IndustryFilter) => {
        if (filter.isEnabled) {
          filterIds.push(filter.id);
        }
      });
    });
    return filterIds;
  }

}
