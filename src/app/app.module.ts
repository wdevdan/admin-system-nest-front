import { NbChatModule, NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';

import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const messageGoogleMapKey = 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    JwtModule,
    HttpClientModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbChatModule.forRoot({ messageGoogleMapKey }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly siteName = 'Admin ';

  constructor(private router: Router, private title: Title) {
      router.events.subscribe((e) => {
          if (e instanceof NavigationEnd) {
              this.title.setTitle(this.getFullTitle());
          }
      });
  }

  private getFullTitle = () => this.siteName + this.getRouterNameByParam();

  private getRouterNameByParam = () => this.router.routerState.snapshot.url.split('/').pop();
}
