import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuardLoginService } from './shared/services/auth-guard-login.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { TokenStorage } from './shared/services/token-storage.service';
import { NotifyService } from './shared/services/notify.service';
import { LoginService } from './shared/services/login.service';
import { AuthService } from './shared/services/auth.service';

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  providers: [AuthGuardLoginService, AuthGuardService, AuthService, LoginService, TokenStorage, NotifyService],
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
