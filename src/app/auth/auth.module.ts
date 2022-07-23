import { NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';

import { formImport } from '../@imports/form-import';
import { pageViewImport } from '../@imports/page-view.import';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';

@NgModule({
  imports: [
    NbAuthModule,
    AuthRoutingModule,

    ...formImport,
    ...pageViewImport,
  ],
  declarations: [
    AuthComponent,

    ...routedComponents
  ],
})
export class AuthModule {}
