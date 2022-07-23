import { NgModule } from '@angular/core';

import { BaseListStyleComponent } from '../base-list/base-list-style/base-list-style.component';
import { PagesRoutesRoutingModule, routedComponents } from './pages-routes-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutesComponent } from './pages-routes.component';

import { pageViewImport } from '../../@imports/page-view.import';
import { NbAccordionModule } from '@nebular/theme';

@NgModule({
  imports: [
    ComponentsModule,
    NbAccordionModule,
    PagesRoutesRoutingModule,

    ...pageViewImport
  ],
  declarations: [
    BaseListStyleComponent,
    PagesRoutesComponent,

    ...routedComponents
  ],
})
export class PagesRoutesModule {}
