import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { CommonModule } from '@angular/common';
import { of as observableOf } from 'rxjs';

import { AnalyticsService, LayoutService, PlayerService, SeoService, StateService } from './utils';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-data';
import { UserActivityData } from './data/user-activity';
import { OrdersChartData } from './data/orders-chart';
import { ProfitChartData } from './data/profit-chart';
import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
import { CountryOrderData } from './data/country-order';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { VisitorsAnalyticsData } from './data/visitors-analytics';
import { SecurityCamerasData } from './data/security-cameras';

import { UserService } from './service/users.service';
import { ElectricityService } from './service/electricity.service';
import { SmartTableService } from './service/smart-table.service';
import { BaseHttpService } from './service/base/base-http.service';
import { UserActivityService } from './service/user-activity.service';
import { OrdersChartService } from './service/orders-chart.service';
import { ProfitChartService } from './service/profit-chart.service';
import { TrafficListService } from './service/traffic-list.service';
import { EarningService } from './service/earning.service';
import { OrdersProfitChartService } from './service/orders-profit-chart.service';
import { TrafficBarService } from './service/traffic-bar.service';
import { ProfitBarAnimationChartService } from './service/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './service/temperature-humidity.service';
import { SolarService } from './service/solar.service';
import { TrafficChartService } from './service/traffic-chart.service';
import { StatsBarService } from './service/stats-bar.service';
import { CountryOrderService } from './service/country-order.service';
import { StatsProgressBarService } from './service/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './service/visitors-analytics.service';
import { SecurityCamerasService } from './service/security-cameras.service';
import { MockDataModule } from './service/core-services.module';
import { HttpService } from './service/base/http.service';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
  { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  { provide: SecurityCamerasData, useClass: SecurityCamerasService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: CountryOrderData, useClass: CountryOrderService },
  { provide: OrdersChartData, useClass: OrdersChartService },
  { provide: ProfitChartData, useClass: ProfitChartService },
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: TrafficBarData, useClass: TrafficBarService },
  { provide: StatsBarData, useClass: StatsBarService },
  { provide: EarningData, useClass: EarningService },
  { provide: SolarData, useClass: SolarService },
  { provide: UserData, useClass: UserService },

  { provide: HttpService, useClass: BaseHttpService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({
    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider,
    useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
  SeoService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
