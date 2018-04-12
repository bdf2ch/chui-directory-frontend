import { IAdvertiser } from '../interfaces/advertiser.interface';
import { Industry } from './industry.model';
import { RoleType } from '../enums/role-type.enum';
import { Company } from './company.model';
import { MarkerOptions } from '@agm/core/services/google-maps-types';
import {Marker} from "./marker.model";


export class Advertiser {
  id: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  roleType: RoleType;
  industry: Industry;
  company: Company;
  marker: Marker;

  constructor(config?: IAdvertiser) {
    this.id = config ? config.id : '';
    this.emailAddress = config ? config.emailAddress : '';
    this.firstName = config ? config.firstName : '';
    this.lastName = config ? config.lastName : '';
    this.roleType = config ? config.roleType : RoleType.Advertiser;
    this.industry = config ? new Industry(config.industry) : new Industry();
    this.company = config ? new Company(config.company) : new Company();
    //this.marker = config ? new Marker(config.company.place.geometry.location) : new Marker();

    /*
    this.marker.position.lat = config ? this.company.place.geometry.location.lat : 0;
    this.marker.position.lng = config ? this.company.place.geometry.location.lng : 0;
    this.marker.clickable = true;
    this.marker.draggable = false;
    this.marker.label = '';
    this.marker.title = config ? this.company.name : '';
    */
  }
}
