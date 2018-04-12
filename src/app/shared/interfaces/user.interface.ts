import { RoleType } from '../enums/role-type.enum';
import { Company } from '../models/company.model';

export interface IUser {
  id?: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  roleType: RoleType;
  company: Company;
}
