import { Injectable } from '@angular/core';

import { TokenStorage } from './token-storage.service';
import { AuthService } from './auth.service';
import { NbTokenStorage } from '@nebular/auth';

@Injectable()
export class LoginService extends NbTokenStorage {
  protected readonly strategy = 'jwt';
  protected readonly delayTime = 1000;

  constructor(protected tokenStorage: TokenStorage, protected authService: AuthService){
    super();
  }

  login(user: any) {
    this.authService.login(user).subscribe({
      next: this._handlerNext,
      error: this._handlerError,
      complete: this._handlerComplete,
    });
  }

  get(): any {
    return this.tokenStorage.getToken();
  }

  set(token: any): void {
    this.tokenStorage.setToken(token);
  }

  clear(): void {
    this.tokenStorage.clearToken();
  }

  expired(): boolean {
    return this.tokenStorage.tokenIsExpired();
  }

  protected _handlerNext = (response: any) => {
    const { body } = response;

    if (!body) return this.clear();

    if (!this.tokenStorage.validateToken(body)) {
      this.set(body);

      setTimeout(() => window.location.reload(), this.delayTime + 500);
    };
  };

  protected _handlerComplete = () => console.info("complete");
  protected _handlerError = (err: any) => console.error("error", err);
}
