import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artista } from '../interfaces/artista';


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
   constructor(private http: HttpClient) { }
    
    getArtist(art: string) {
      return this.http.get<Artista>(`https://api.deezer.com/search/artist?q=${art}`);
    }
  }

