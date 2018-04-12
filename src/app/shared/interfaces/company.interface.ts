import { IPlace } from './place.interface';

export interface ICompany {
  id: string;
  placeId: string;
  name: string;
  summary: string;
  location: string;
  place: IPlace;
}
