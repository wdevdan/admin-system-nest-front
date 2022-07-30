import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';

import { SimpleDashboardComponent } from './simple-dashboard.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbTabsetModule,
    NbButtonModule,
    NbSelectModule,
    LeafletModule,
    NbCardModule,
    NbUserModule,
    NbIconModule,
    NbListModule,
    ThemeModule,
    ChartModule,
  ],
  declarations: [
    SimpleDashboardComponent,
  ],
  providers: [],
})
export class SimpleDashboardModule { }
