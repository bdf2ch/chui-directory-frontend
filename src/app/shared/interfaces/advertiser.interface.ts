import { IUser } from './user.interface';

export interface IAdvertiser extends IUser {
  industry: string;
  title: string;
}
