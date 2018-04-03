import { User } from './user.model';
import { IAdvertiser } from '../interfaces/advertiser.interface';


export class Advertiser extends User {
  industry: string;

  constructor(config?: IAdvertiser) {
    super(config);
    this.industry = config ? config.industry : '';
  }
}
