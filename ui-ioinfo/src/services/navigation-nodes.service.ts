import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationNodesService {

    constructor(private http: HttpClient, private sharedService: SharedService) { }
  

    getNavigationNodes(): Observable<any> {
      const serviceUrl = `http://localhost:8085/employee-app/api/navigation-nodes`;
  
      // Get headers from SharedService
      const headers: HttpHeaders | null = this.sharedService.getHeaders();
  
      // Use an empty HttpHeaders object if headers is null
      const options = {
        headers: headers ? headers : new HttpHeaders() // Fallback to an empty headers object
      };
  
      console.log("urllddddddddddddddddddl", serviceUrl);
  
      this.http.get<any>(serviceUrl, options).forEach(element => {
        console.log(element);
  
  
      });;
  
      return this.http.get<any>(serviceUrl, options);
    }
  
  
  
  }
  