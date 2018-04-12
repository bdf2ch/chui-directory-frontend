import { MarkerOptions } from '@agm/core/services/google-maps-types';
import { ILocation } from '../interfaces/location.interface';

export class Marker {
  label: string;
  title: string;
  location: ILocation;
  clickable: boolean;
  draggable: boolean;

  constructor(config?: MarkerOptions) {
    this.label = config ? <string>config.label : '';
    this.title = config ? config.title : '';
    this.clickable = config ? config.clickable : true;
    this.draggable = config ? config.draggable : false;
    // this.location.lat = config ? config.position.lat : 0;
    // this.location.lng = config ? config.position.lng : 0;
  }
}
