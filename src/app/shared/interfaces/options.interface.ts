export interface ConfigModelOptions {
  title: any;
  value?: any;
  type?: string;
  toString?: boolean;
  toNumber?: boolean;
  upperCase?: boolean;
  lowerCase?: boolean;
  capitalize?: boolean;
}

export interface SmartTableOptions {
  add: any;
  edit: any;
  delete: any;
  columns: {
    [x: string]: any;
  };
}
