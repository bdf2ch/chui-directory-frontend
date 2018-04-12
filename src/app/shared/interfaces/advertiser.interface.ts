import { RoleType } from '../enums/role-type.enum';
import { Company } from '../models/company.model';
import { IIndustry } from './industry.interface';
import { ICompany } from './company.interface';

export interface IAdvertiser {
  id: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  roleType: RoleType;
  company: ICompany;
  industry: IIndustry;
}
