import { UserData } from "./user-data.entity";

import { BaseModel, StyleBaseModel } from "../base";

export class User extends BaseModel {
  username: string;

  login?: string;
  password?: string;

  userData?: UserData;
}

export const StyleUserModel = () =>
  Object.assign({}, {
    username: {
      capitalize: true,
    },
    login: {
      capitalize: true,
    },
  }, StyleBaseModel());
