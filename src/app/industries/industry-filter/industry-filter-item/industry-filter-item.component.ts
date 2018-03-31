import {Component, Input, OnInit} from '@angular/core';
import {IndustryFilter} from '../../../shared/models/industry-filter.model';

@Component({
  selector: 'app-industry-filter-item',
  templateUrl: './industry-filter-item.component.html',
  styleUrls: ['./industry-filter-item.component.scss']
})
export class IndustryFilterItemComponent implements OnInit {
  @Input() filter: IndustryFilter;

  constructor() { }

  ngOnInit() {
  }

}
