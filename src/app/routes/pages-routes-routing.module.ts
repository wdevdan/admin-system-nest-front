import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SmartUserComponent } from './users/smart-users/smart-user.component';
import { SmartItemComponent } from './items/smart-items/smart-item.component';
import { FormUserComponent } from './users/form-user/form-user.component';
import { PagesRoutesComponent } from './pages-routes.component';

const routes: Routes = [{
  path: '',
  component: PagesRoutesComponent,
  children: [
    {
      path: 'items',
      loadChildren: () => import('./items/items.module')
        .then(m => m.ItemsModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutesRoutingModule { }

// try refactor this, remove smart... and use in comp module
export const routedComponents = [
  SmartUserComponent,
  SmartItemComponent,
  FormUserComponent,
];
