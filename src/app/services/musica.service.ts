import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObject } from '../interfaces/musica';


@Injectable({
  providedIn: 'root'
})
export class MusicaService {
   constructor(private http: HttpClient) { }
    
    getUsers(art: string) {
      return this.http.get<RootObject>(`https://api.deezer.com/search/track?q=${art}&limit=15&order=RANKING`);
    }
  }

