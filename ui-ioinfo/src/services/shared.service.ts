import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  rootUrl = environment.rootUrl;
  headers: HttpHeaders | null = null; // Initialize headers to null
  
  constructor() { }

  setHeaders(token: string | null): void {
    if (token) {
      this.headers = new HttpHeaders().set('token', token);
    }
  }

  getHeaders(): HttpHeaders | null {
    if (typeof window !== 'undefined' && localStorage) { // Check for window
      const jwtToken = localStorage.getItem('token');
      if (jwtToken) {
        this.headers = new HttpHeaders().set('token', jwtToken);
      }
    }
    return this.headers;
  }
}
