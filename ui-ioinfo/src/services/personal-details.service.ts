import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

    constructor(private http: HttpClient, private sharedService: SharedService) { }

  getPersonalInformation(): Observable<any> {

      let  serviceUrl= `${environment.rootUrl}` + "/employee-app/api/about-me";
        
    
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
