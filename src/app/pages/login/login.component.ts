import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion() {
    const datos = { email: this.email, password: this.password };
    this.http.post('http://localhost/entretenia/Inicio.php', datos).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/home']); 
        } else {
          this.mensaje = response.message; 
        } 
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.mensaje = 'Error en la comunicación con el servidor';
      }
    );
  }
}