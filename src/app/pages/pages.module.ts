import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SimpleDashboardModule } from './simple-dashboard/simple-dashboard.module';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    SimpleDashboardModule,
    MiscellaneousModule,

    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {}
