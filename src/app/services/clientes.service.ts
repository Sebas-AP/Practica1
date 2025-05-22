import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  guardarusuario(usuario: any) {
    return this.http.post(`http://localhost/desWeb/registroUser.php`, JSON.stringify(usuario));

  }
}