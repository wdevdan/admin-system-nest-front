import { pageViewImport as pageViewComponents } from '../@imports/page-view.import';
import { NbAccordionModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { NgModule } from '@angular/core';

import { BaseListStyleComponent } from '../pages/base-list/base-list-style/base-list-style.component';
import { PagesRoutesRoutingModule, routedComponents } from './pages-routes-routing.module';
import { ComponentsModule } from '../pages/components/components.module';
import { PagesRoutesComponent } from './pages-routes.component';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    ComponentsModule,
    NbAccordionModule,
    PagesRoutesRoutingModule,

    ...pageViewComponents
  ],
  declarations: [
    BaseListStyleComponent,
    PagesRoutesComponent,

    ...routedComponents
  ],
})
export class PagesRoutesModule {}
