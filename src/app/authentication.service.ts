import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  authenticate(username: string, password: string): boolean {
    if (username === "User" && password === '123') {
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('authenticateuser', username);
      }
      return true;
    }
    return false;
  }

  isUserLoggedin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = sessionStorage.getItem('authenticateuser');
      return user !== null;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticateuser');
    }
  }
}
