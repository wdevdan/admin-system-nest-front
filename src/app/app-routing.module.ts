import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MiscellaneousComponent } from './pages/miscellaneous/miscellaneous.component';
import { AuthGuardLoginService } from './shared/services/auth-guard-login.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { TokenStorage } from './shared/services/token-storage.service';
import { NotifyService } from './shared/services/notify.service';
import { LoginService } from './shared/services/login.service';
import { AuthService } from './shared/services/auth.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/dashboard',
  },
  {
    path: 'routes',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./routes/pages-routes.module').then((m) => m.PagesRoutesModule)
  },
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'not-found', component: MiscellaneousComponent },
  { path: '**', redirectTo: 'not-found' },
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
