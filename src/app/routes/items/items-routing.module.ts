import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SmartItemComponent } from './smart-items/smart-item.component';
import { ItemComponent } from './items.component';

const routes: Routes = [{
  path: '',
  component: ItemComponent,
  children: [
    {
      path: 'smart-item',
      component: SmartItemComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
