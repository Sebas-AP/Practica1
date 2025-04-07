import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = '445ad2635b9a400fb805ec64708a6bc0';
  private clientSecret = 'b1009a7ac2194639b85618b224dc5701';
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    });

    const body = 'grant_type=client_credentials';

    return this.http.post(this.tokenUrl, body, { headers });
  }
}
