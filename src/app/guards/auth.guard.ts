import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica si hay un token o variable en localStorage
    if (localStorage.getItem('logueado') === 'true') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}