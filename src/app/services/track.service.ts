import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracks } from '../interfaces/track';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
   constructor(private http: HttpClient) { }
    
    getTrack(art: string) {
      return this.http.get<Tracks>(`https://api.deezer.com/search/track?q=${art}`);
    }
  }