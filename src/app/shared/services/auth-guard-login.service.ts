import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuardLoginService implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>((observer) => {
      const token = this.loginService.expired();

      if (!token) {
        this.router.navigate(['pages', 'dashboard']);
      }

      console.warn('❎ - AuthGuardLogin');

      observer.next(token);
      observer.complete();
    });
  }
}
