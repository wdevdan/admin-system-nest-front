import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuardLoginService } from '../shared/services/auth-guard-login.service';
import { RequestPasswordComponent } from './request-password/request-password.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent, // NbAuthComponent - backup comp
  children: [
    {
      path: '',
      component: LoginComponent,
      canActivate: [AuthGuardLoginService],
    },
    {
      path: 'login',
      component: LoginComponent, // NbLoginComponent - default
      canActivate: [AuthGuardLoginService],
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent
    },
    {
      path: 'request-password',
      component: RequestPasswordComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

export const routedComponents = [
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ResetPasswordComponent,
  RequestPasswordComponent,
];
