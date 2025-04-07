import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Canciones } from '../interfaces/cancion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CancionService {
   constructor(private http: HttpClient) { }
    
   getCancion(can: string) {
    return this.http.get<Canciones>(`https://api.deezer.com/search?q=track:"${can}"`);
  }
  }

  