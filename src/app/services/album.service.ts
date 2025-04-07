import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Albumes } from '../interfaces/album';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
   constructor(private http: HttpClient) { }
    
    getAlbum(art: string) {
      return this.http.get<Albumes>(`https://api.deezer.com/search/album?q=${art}`);
    }
  }
