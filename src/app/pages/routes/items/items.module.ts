import { NgModule } from '@angular/core';

import { ItemRoutingModule } from './items-routing.module';
import { ItemComponent } from './items.component';

@NgModule({
  imports: [
    ItemRoutingModule
  ],
  declarations: [
    ItemComponent,
  ],
})
export class ItemsModule {}
