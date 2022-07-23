import { NgModule } from '@angular/core';

import { BaseFormComponent } from './base-form.component';
import { pageViewImport } from '../../@imports/page-view.import';

@NgModule({
  imports: [
    ...pageViewImport,
  ],
  declarations: [
    BaseFormComponent
  ],
})
export class BaseFormModule { }

