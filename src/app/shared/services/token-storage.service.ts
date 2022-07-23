import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorage {
  protected jwtHelper = new JwtHelperService();
  protected readonly strategy = 'jwt';

  getToken(): string {
    return this.getManualToken();
  }

  getManualToken(): string {
    return document.cookie['jwt'] ??
    localStorage.getItem(this.strategy) ??
    sessionStorage.getItem(this.strategy);
  }

  tokenIsExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.getManualToken());
  }

  validateToken(token: any): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  setToken(token: string): void {
    if (typeof token != typeof 'string') token = JSON.stringify(token);

    sessionStorage.setItem(this.strategy, token);
    localStorage.setItem(this.strategy, token);
  }

  clearToken(): void {
    sessionStorage.removeItem(this.strategy);
    localStorage.removeItem(this.strategy);
  }
}
