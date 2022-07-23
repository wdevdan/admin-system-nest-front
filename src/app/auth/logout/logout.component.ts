import { NbLogoutComponent } from '@nebular/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-logout',
  template: `<nb-logout></nb-logout>`,
})
export class LogoutComponent extends NbLogoutComponent {}

