import { NbComponentStatus } from "@nebular/theme";

export enum notifyTypesValues {
  "primary" = 0,
  "success" = 1,
  "info" = 2,
  "warning" = 3,
  "danger" = 4,
}

export enum notifyTypes {
  PRIMARY = 0,
  SUCCESS = 1,
  INFO = 2,
  WARNING = 3,
  DANGER = 4,
}

export const getNotifyType = (n: number) => notifyTypesValues[n] as NbComponentStatus;
