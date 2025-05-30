import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comic } from '../interfaces/libro'; // Adjust the path as necessary


@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }
  
    getcomic(com: string) {
      const url = `https://openlibrary.org/search.json?q=${com}`;
      return this.http.get<comic>(url);
    }
}
