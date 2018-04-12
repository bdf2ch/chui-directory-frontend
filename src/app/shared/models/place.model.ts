import { IGeometry } from '../interfaces/geometry.interface';
import { IPlace } from '../interfaces/place.interface';

export class Place {
  id: string;
  placeId: string;
  address: string;
  icon: string;
  url: string;
  geometry: IGeometry;


  constructor(config?: IPlace) {
    this.id = config ? config.id : '';
    this.placeId = config ? config.place_id : '';
    this.address = config ? config.formatted_address : '';
    this.icon = config ? config.icon : '';
    this.url = config ? config.url : '';
    this.geometry = config ? config.geometry : {location: {lat: 0, lng: 0}, viewport: {northeast: {lat: 0, lng: 0}, southwest: {lat: 0, lng: 0}}};
  }
}
