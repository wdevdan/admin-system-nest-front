import { NgModule } from '@angular/core';

import { UserRoutingModule } from './users-routing.module';
import { UserComponent } from './users.component';

@NgModule({
  imports: [
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
  ],
})
export class UsersModule {}
