import { NbRequestPasswordComponent } from '@nebular/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-request-password',
  template: `<nb-request-password-page></nb-request-password-page>`,
})
export class RequestPasswordComponent extends NbRequestPasswordComponent {}

