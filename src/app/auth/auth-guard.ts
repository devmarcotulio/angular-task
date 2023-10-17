import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (!isAuthenticated) {
      this.router.navigate(['']);
      window.alert('Unauthorized');
      return false;
    }

    return true;
  }
}
