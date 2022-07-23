import { BaseModel, StyleBaseModel } from "../base";

export class Item extends BaseModel {
  name: string;
  description: string;
}

export const StyleItemModel = () =>
  Object.assign({}, {
    name: {
      capitalize: true,
    },
    description: {
      capitalize: true,
    },
  }, StyleBaseModel());
