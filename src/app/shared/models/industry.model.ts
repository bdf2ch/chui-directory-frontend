import { IIndustry } from '../interfaces/industry.interface';
import { IndustryFilter } from './industry-filter.model';


export class Industry implements IIndustry {
  id: string;
  parent: string;
  label: string;
  children: IndustryFilter[];

  constructor(config?: IIndustry) {
    this.id = config ? config.id : '';
    this.parent = config ? config.parent : '';
    this.label = config ? config.label : '';
    this.children = [];

    if (config && config.children) {
      config.children.map((item: IIndustry) => {
        const filter = new IndustryFilter(item);
        this.children.push(filter);
      });
    }
  }
}

