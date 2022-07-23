import { NbRegisterComponent } from '@nebular/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-register',
  template: `<nb-register></nb-register>`,
})
export class RegisterComponent extends NbRegisterComponent {}

