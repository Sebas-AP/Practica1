import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { series } from '../../interfaces/series';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }
  getSeries(nombre:string){
    return this.http.get<series>('https://api.tvmaze.com/shows/&query='+nombre);
  }
}
