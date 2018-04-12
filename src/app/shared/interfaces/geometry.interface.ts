import { ILocation } from './location.interface';

export interface IGeometry {
  location: ILocation;
  viewport?: {
    northeast: ILocation,
    southwest: ILocation
  };
}
