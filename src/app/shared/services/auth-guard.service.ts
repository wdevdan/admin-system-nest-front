import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>((observer) => {
      const token = this.loginService.expired();

      if (token) {
        this.router.navigate(['auth', 'login']);
      }

      console.warn('✅ - AuthGuard');

      observer.next(!token);
      observer.complete();
    });
  }
}
