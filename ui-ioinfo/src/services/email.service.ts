import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

 constructor(private http: HttpClient, private sharedService: SharedService) { }
  
    sendSubscriptionEmail(): Observable<any> {
  
        let  serviceUrl= `${environment.rootUrl}` + "/employee-app/api/user/kganesh.sw.engg@gmail.com";
          
      
          // Get headers from SharedService
          const headers: HttpHeaders | null = this.sharedService.getHeaders();
      
          // Use an empty HttpHeaders object if headers is null
          const options = {
            headers: headers ? headers : new HttpHeaders() // Fallback to an empty headers object
          };
      
          console.log("urllddddddddddddddddddl", serviceUrl);
      
          this.http.get<any>(serviceUrl, options).forEach((element:any) => {
            console.log(element);
      
      
          });;
      
          return this.http.get(serviceUrl, { ...options, responseType: 'text' as 'json' });
        }
  }
  