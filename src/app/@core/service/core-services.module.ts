import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolarService } from './solar.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './earning.service';
import { StatsBarService } from './stats-bar.service';
import { BaseHttpService } from './base/base-http.service';
import { SmartTableService } from './smart-table.service';
import { TrafficBarService } from './traffic-bar.service';
import { ElectricityService } from './electricity.service';
import { OrdersChartService } from './orders-chart.service';
import { ProfitChartService } from './profit-chart.service';
import { TrafficListService } from './traffic-list.service';
import { TrafficChartService } from './traffic-chart.service';
import { CountryOrderService } from './country-order.service';
import { UserActivityService } from './user-activity.service';
import { SecurityCamerasService } from './security-cameras.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';

import { SmartItemService } from './routes/smart-item.service';
import { SmartUserService } from './routes/smart-user.service';
import { HttpService } from './base/http.service';
import { UserService } from './users.service';

const SERVICES = [
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  OrdersProfitChartService,
  VisitorsAnalyticsService,
  StatsProgressBarService,
  SecurityCamerasService,
  CountryOrderService,
  UserActivityService,
  TrafficChartService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  ElectricityService,
  TrafficBarService,
  SmartTableService,
  StatsBarService,
  PeriodsService,
  EarningService,
  SolarService,

  BaseHttpService,

  SmartItemService,
  SmartUserService,
  HttpService,
  UserService,
];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [...SERVICES],
    };
  }
}
