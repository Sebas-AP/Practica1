import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.deepseek.com/v1'; // Replace with your actual API endpoint
  private apiKey = 'sk-94da8dd7bd8e4928afc30b32af55bc21'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getRecommendations(userInput: string): Observable<any> {
    const prompt = `Based on the following preferences, recommend 3 options in the requested category. 
    Format as a numbered list with title, year, and brief reason for recommendation. 
    User input: "${userInput}"`;

    return this.http.post(this.apiUrl, {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    });
  }
}