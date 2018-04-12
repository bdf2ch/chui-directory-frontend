import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import { IndustryFilter } from '../../shared/models/industry-filter.model';
import { IndustriesService } from '../../shared/services/industries.service';
import { Industry } from '../../shared/models/industry.model';
import { AdvertisersService } from '../../shared/services/advertisers.service';

@Component({
  selector: 'app-industry-filter',
  templateUrl: './industry-filter.component.html',
  styleUrls: ['./industry-filter.component.scss']
})
export class IndustryFilterComponent implements OnInit {


  constructor(public industries: IndustriesService,
              private advertisers: AdvertisersService) {};

  @Output() clearFilters: EventEmitter<any> = new EventEmitter();




  ngOnInit() {
    if (this.industries.getList().length === 0) {
      this.industries.fetch();
    }
  }


  /**
   * Applies selected filters
   */
  apply(): void {
    this.advertisers.clear();
    this.advertisers.fetchByFilter(true);
  }


  /**
   * Clears all industry filters
   */
  clear(): void {
    this.industries.getList().map((industry: Industry) => {
      industry.children.map((filter: IndustryFilter) => {
        filter.disable();
      });
    });
    this.clearFilters.emit();
  }
}
