import {  Component } from '@angular/core';

import { LoginService } from '../../shared/services/login.service';
import { User } from '../../shared/models';

@Component({
  selector: 'ngx-login',
  templateUrl:'./login.component.html',
})
export class LoginComponent {
  email: string;
  password: string;
  submitted: boolean;
  rememberMe: boolean;

  constructor(protected loginService: LoginService){}

  async login() {
    const user = new User();

    user.login = this.email;
    user.username = this.email;
    user.password = this.password;

    this.loginService.login(user);
  }
}
