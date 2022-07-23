import { User } from './user.entity';

import { BaseModel } from '../base';

export class UserData extends BaseModel {
  name: string;

  alias?: string;
  email?: string;
  document?: string;
  lastName?: string;
  middleName?: string;

  user?: User;
}
