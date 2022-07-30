import { NbAuthComponent } from '@nebular/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-custom-auth',
  template: '<router-outlet></router-outlet>',
})
export class AuthComponent extends NbAuthComponent {}
