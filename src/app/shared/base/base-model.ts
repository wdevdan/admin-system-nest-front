export abstract class BaseModel {
  uid: string;
  isActive: boolean;
  isArchived: boolean;

  createdBy?: number;
  updatedBy?: number;

  view?: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export const StyleBaseModel = () =>
  Object.assign({
    uid: { upperCase: true },
    view: { capitalize: true },
    // isActive: {
    //   upperCase: true,
    // },
    // isArchived: {
    //   upperCase: true,
    // },
    // createdBy: {
    //   upperCase: true,
    // },
    // updatedBy: {
    //   upperCase: true,
    // },
    // createdAt: {
    //   upperCase: true,
    // },
    // updatedAt: {
    //   upperCase: true,
    // },
    // deletedAt: {
    //   upperCase: true,
    // },
  });
