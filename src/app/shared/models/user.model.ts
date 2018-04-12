import { RoleType } from '../enums/role-type.enum';
import { Company } from './company.model';
import { IUser } from '../interfaces/user.interface';


export class User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: RoleType;
  company: Company;

  constructor(config?: IUser) {
    this.id = config ? config.id : '';
    this.firstName = config ? config.firstName : '';
    this.lastName = config ? config.lastName : '';
    this.email = config ? config.emailAddress : '';
    this.role = config ? config.roleType : null;
  }
}
