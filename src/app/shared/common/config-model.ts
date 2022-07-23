import { ConfigModelOptions } from "../interfaces";
import FieldConverter from "./field-converter";

export class ConfigModel {
  private object: ConfigModelOptions[] = [];

  constructor(options: ConfigModelOptions[]) {
    for (let option of options) {
      this.object.push(option);

      let index = options.findIndex((opt) => opt == option);
      let changeTo = new FieldConverter(option.title);
      let target = this.object[index];

      switch (true) {
        case option.capitalize:
          target.value = changeTo.Capitalize();
          break;
        case option.upperCase:
          target.value = changeTo.Uppercase();
          break;
        case option.lowerCase:
          target.value = changeTo.Lowercase();
          break;
        case option.toNumber:
          target.value = changeTo.ToNumber();
          break;
        case option.toString:
          target.value = changeTo.ToString();
          break;
        default:
          target.value = target.title;
      }
    }
  }

  converted = () => this.object;
}
