import { BaseModel } from '../../base';
import { User, UserData } from '..';

export class RelUserData extends BaseModel {
  userUid: string;
  userDataUid: string;

  user: User;
  userData: UserData;
}
