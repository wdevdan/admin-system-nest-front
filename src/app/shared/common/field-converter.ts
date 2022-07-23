export default class FieldConverter {
  private emptyMessage = 'Empty Field';

  constructor(protected field?: string) {
    this.field = field || '';
  }

  Capitalize(field?: string) {
      if (field) this.field = field;

      if (this.field) {
        return this.field.charAt(0).toUpperCase() + this.field.slice(1);
      } else {
        return this.emptyMessage;
      }
  }

  Uppercase(field?: string) {
      if (field) this.field = field;

      if (this.field) {
        return this.field.toUpperCase();
      } else {
        return this.emptyMessage;
      }
  }

  Lowercase(field?: string) {
      if (field) this.field = field;

      if (this.field) {
        return this.field.toLowerCase();
      } else {
        return this.emptyMessage;
      }
  }

  ToNumber(field?: string) {
      if (field) this.field = field;

      if (this.field) {
        return Number(this.field);
      } else {
        return this.emptyMessage;
      }
  }

  ToString(field?: string) {
      if (field) this.field = field;

      if (this.field) {
        return this.field.toString();
      } else {
        return this.emptyMessage;
      }
  }
}
