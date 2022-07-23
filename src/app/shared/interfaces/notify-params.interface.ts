import { NbComponentStatus } from "@nebular/theme";

export interface notifyParams {
  title?: string;
  content: string;
  duration?: number;
  destroyByClick?: boolean;
  status?: NbComponentStatus;

  // limit?: number;
  // hasIcon: boolean;
  // toastClass: string;
  // preventDuplicates: boolean;
  // position: NbGlobalPosition;
  // icon: string | NbIconConfig;
}
