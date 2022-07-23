import { Injectable } from '@angular/core';

import {
  NbGlobalPhysicalPosition as PPosition,
  NbGlobalLogicalPosition as LPosition,
  NbToastrService, NbToastrConfig,
  NbComponentStatus as NbStatus,
  NbGlobalPosition as GPosition
} from '@nebular/theme';

import { notifyParams } from '../interfaces';

@Injectable()
export class NotifyService {
  constructor(private toastrService: NbToastrService) {
    this.loadDefaultValues();
  }

  types: NbStatus[];
  config: NbToastrConfig;

  title: string;
  content: string;
  status: NbStatus;
  position: GPosition;

  index: number;
  duration: number;
  hasIcon: boolean;
  destroyByClick: boolean;
  preventDuplicates: boolean;

  positions: string[] = [
    PPosition.TOP_RIGHT,
    PPosition.TOP_LEFT,
    PPosition.BOTTOM_LEFT,
    PPosition.BOTTOM_RIGHT,

    LPosition.TOP_END,
    LPosition.TOP_START,
    LPosition.BOTTOM_END,
    LPosition.BOTTOM_START,
  ];

  loadDefaultValues() {
    this.index = 0;
    this.hasIcon = true;
    this.destroyByClick = true;
    this.preventDuplicates = false;

    this.duration = 2;
    this.title = 'Info';
    this.status = 'primary';
    this.content = 'Loading data..';
    this.position = PPosition.TOP_RIGHT;
    this.types = ['primary','success','info','warning','danger'];
  }

  getDefaultValues = () => {
    this.loadDefaultValues();

    return Object.assign({
      position: this.position,
      duration: this.duration,
      content: this.content,
      status: this.status,
      title: this.title
    });
  }

  show(params: notifyParams) {
    if (params) Object.keys(params).forEach(k => { if (this[k]) this[k] = params[k] });

    this.showToast(this.status, this.title, this.content);
    this.loadDefaultValues();
  }

  private showToast(type: NbStatus, title: string, body: string) {
    const titleContent = title ? `. ${title}` : '';

    const config = {
      status: type,
      hasIcon: this.hasIcon,
      position: this.position,
      duration: this.duration * 1000,
      destroyByClick: this.destroyByClick,
      preventDuplicates: this.preventDuplicates,
    }

    this.toastrService.show(body, ++this.index + titleContent, config);
  }

  openRandomToast () {
    const models = [
      { title: 'WTF?', body: 'Titles are not always needed' },
      { title: null, body: 'We rock at Angular' },
      { title: null, body: 'Notify rock!' },
    ];

    const typeIndex = Math.floor(Math.random() * this.types.length);
    const quoteIndex = Math.floor(Math.random() * models.length);

    const type = this.types[typeIndex];
    const quote = models[quoteIndex];

    this.showToast(type, quote.title, quote.body);
  }
}
