import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { pageViewImport as pageViewComponents } from '../../@imports/page-view.import';
import { UserRoutingModule } from './users-routing.module';
import { UserComponent } from './users.component';

@NgModule({
  imports: [
    ...pageViewComponents,

    UserRoutingModule,
    ThemeModule,
  ],
  declarations: [
    UserComponent,
  ],
})
export class UsersModule {}
