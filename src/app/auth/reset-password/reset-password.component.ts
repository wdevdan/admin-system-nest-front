import { NbResetPasswordComponent } from '@nebular/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-reset-password',
  template: `<nb-reset-password-page></nb-reset-password-page>`,
})
export class ResetPasswordComponent extends NbResetPasswordComponent {}

