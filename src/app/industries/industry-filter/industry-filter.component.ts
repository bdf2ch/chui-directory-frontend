import { Component, OnInit, Input } from '@angular/core';
import { IndustryFilter } from '../../shared/models/industry-filter.model';
import {IndustriesResource} from '../../shared/resources/industries-resource.service';
import {IResponse} from '../../shared/models/response.model';
import {Industry} from '../../shared/models/industry.model';
import {IIndustry} from '../../shared/interfaces/industry.interface';

@Component({
  selector: 'app-industry-filter',
  templateUrl: './industry-filter.component.html',
  styleUrls: ['./industry-filter.component.scss']
})
export class IndustryFilterComponent implements OnInit {
  @Input() filters: IndustryFilter[];
  public isFetchingData: boolean;

  constructor(private industries: IndustriesResource) {
    this.filters = [];
    this.isFetchingData = false;
  }

  ngOnInit() {
    this.isFetchingData = true;
    this.industries.getIndustriesList().then((data: IResponse<Industry[]>) => {
      console.log(data);
      this.isFetchingData = false;
      if (data.isSuccess) {
        data.response.forEach((item: IIndustry) => {
          const industry = new Industry(item);
        });
      }
    });
  }

}
