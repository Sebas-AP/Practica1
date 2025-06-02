import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  get logueado(): boolean {
    return localStorage.getItem('logueado') === 'true';
  }

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('logueado');
    this.router.navigate(['/login']);
  }
}
