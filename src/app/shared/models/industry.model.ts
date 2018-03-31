import { IIndustry } from '../interfaces/industry.interface';


export class Industry implements IIndustry {
  id: string;
  label: string;
  children: Industry[];

  constructor(config?: IIndustry) {
    this.id = config ? config.id : '';
    this.label = config ? config.label : '';
    this.children = [];

    if (config && config.children) {
      config.children.map((item: IIndustry) => {
        const industry = new Industry(item);
        this.children.push(industry);
      });
    }
  }
}

