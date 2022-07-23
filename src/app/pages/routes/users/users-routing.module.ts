import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SmartUserComponent } from './smart-users/smart-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserComponent } from './users.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'smart-user',
      component: SmartUserComponent,
    },
    {
      path: 'form-user/:uid',
      component: FormUserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
