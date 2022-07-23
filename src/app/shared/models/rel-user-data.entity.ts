import { UserData } from './user-data.entity';
import { User } from './user.entity';

import { BaseModel } from '../base';

export class RelUserData extends BaseModel {
  userUid: string;
  userDataUid: string;

  user?: User;
  userData?: UserData;
}
