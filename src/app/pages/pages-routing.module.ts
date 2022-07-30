import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: SimpleDashboardComponent,
      },
      {
        path: 'iot-dashboard',
        component: DashboardComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
