import { Injectable } from '@angular/core';
import { datos_Peliculas } from '../../interfaces/peliculas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {
  

    constructor(private http: HttpClient ) { }
  
    URP(pelimovies: string){  
      return this.http.get<datos_Peliculas>(`https://www.omdbapi.com/?i=tt3896198&apikey=530c205d&t=${pelimovies}`);
    }
}
