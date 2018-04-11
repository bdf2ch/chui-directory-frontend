import { IAdvertiser } from '../interfaces/advertiser.interface';


export class Advertiser {
  title: string;
  industry: string;
  address: string;
  phones: string[];
  photos: string[];

  constructor(config?: IAdvertiser) {
    this.industry = config ? config.industry : '';
    this.address = '1355 Market St, Suite 900\n San Francisco, CA 94103';
    this.phones = ['(123)456-789'];
    this.photos = [];
  }
}
