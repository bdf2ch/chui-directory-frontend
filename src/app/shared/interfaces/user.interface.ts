import { RoleType } from '../enums/role-type.enum';

export interface IUser {
  id?: string;
  emailAddress: string;
  phoneNumber: string;
  password?: string;
  firstName: string;
  lastName: string;
  roleType: RoleType;
  businessPlan?: string;
  audienceSize?: string;
}
