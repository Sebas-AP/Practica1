import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juegos } from '../../interfaces/juegos';

@Injectable({
  providedIn: 'root'
})
export class IconoService {

  constructor(private http: HttpClient) { }
  
  getIcon() {
    const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=BBB9DDB0D8130E92549DDC003A4F4EDC&steamid=76561199174169074&count=10&format=json`;
    return this.http.get<Juegos>(url);
  }
}
