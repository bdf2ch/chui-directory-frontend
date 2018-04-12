import { IGeometry } from './geometry.interface';

export interface IPlace {
  id: string;
  place_id: string;
  formatted_address: string;
  icon: string;
  url: string;
  geometry: IGeometry;
}
