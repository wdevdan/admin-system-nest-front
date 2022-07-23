import { NgModule } from '@angular/core';

import { BaseListComponent } from './base-list.component';
import { pageViewImport } from '../../@imports/page-view.import';

@NgModule({
  imports: [
    ...pageViewImport,
  ],
  declarations: [
    BaseListComponent
  ],
})
export class BaseListModule { }

