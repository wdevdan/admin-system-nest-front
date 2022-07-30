import { Component } from '@angular/core';

import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-pages-routes',
  styleUrls: ['pages-routes.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesRoutesComponent {
  menu = MENU_ITEMS;
}
