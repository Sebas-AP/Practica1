import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Steam } from '../../interfaces/steam';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  constructor(private http: HttpClient) { }
  
  getSteam(id: string) {
    const url = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${id}&count=30&maxlength=1000&format=json&feed=steam`;
    return this.http.get<Steam>(url);
  }
}
