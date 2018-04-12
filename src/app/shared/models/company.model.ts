import { ICompany } from '../interfaces/company.interface';
import { Place } from './place.model';

export class Company {
  id: string;
  placeId: string;
  name: string;
  summary: string;
  location: string;
  place: Place;

  constructor(config?: ICompany) {
    this.id = config ? config.id : '';
    this.placeId = config ? config.placeId : '';
    this.name = config ? config.name : '';
    this.summary = config ? config.summary : '';
    this.location = config ? config.location : '';
    this.place = config.place ? new Place(config.place) : new Place();
  }
}
