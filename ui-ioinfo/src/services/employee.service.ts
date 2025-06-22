import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { SharedService } from './shared.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getEmployees(): Observable<any> {
    const serviceUrl = `${environment.rootUrl}/employee-app/api/getEmployeedetailsByModelMapperId/1`;

    // Get headers from SharedService
    const headers: HttpHeaders | null = this.sharedService.getHeaders();

    // Use an empty HttpHeaders object if headers is null
    const options = {
      headers: headers ? headers : new HttpHeaders() // Fallback to an empty headers object
    };

    console.log("urlll", serviceUrl);

    this.http.get(serviceUrl, options).forEach(element => {
      console.log(element);
      
      
    });;
    
    return this.http.get(serviceUrl, options);
  }
}
