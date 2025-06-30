import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = "http://localhost:8091";
  authBaseUrl = "http://localhost:8099";

  testbaseUrl = "http://localhost:8096/auth-service-app-info/api";
  // /auth-service/api
  constructor(private http: HttpClient, private sharedService: SharedService) { }


  login(username: string, password: string): Observable<any> {
    const body = { username, password }; // Ensure matching request body

    this.baseUrl = this.authBaseUrl + "/login-app/api";
    const loginConfirmUrl = `${this.baseUrl}/auth/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(loginConfirmUrl, body, { headers }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Store JWT token
          console.log("Login Successful:", response);
        }
      }),
      catchError(error => {
        console.error("Login Failed:", error);
        return throwError(error);
      })
    );
  }



  getEmployees(): Observable<any> {
    const serviceUrl = `http://localhost:8089/employee-app/api/getEmployeedetailsByModelMapperId/1`;

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


  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  

postAPITestUsingEmployeeService(): Observable<any> {
  this.baseUrl = `${environment.rootUrl}` + "/employee-app/api";
  const serviceUrlFile = `${this.baseUrl}/testapi`;

  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');  // Default content-type

  return this.http.post(serviceUrlFile, {}, { headers, responseType: 'text' }).pipe(
    map((response:any) => {

      console.log(response);
      
      try {
        // If response is plain text, try to parse it as JSON
        return JSON.parse(response);
      } catch (error) {
        // If parsing fails, return the raw text or handle accordingly
        return response;
      }
    })
  );
}


tepostAPITestUsingLoginServicestAPI(): Observable<any> {
  this.baseUrl = `${environment.rootUrl}` + "/login-app/api";
  const serviceUrlFile = `${this.baseUrl}/testiii`;

  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');  // Default content-type

  return this.http.post(serviceUrlFile, {}, { headers, responseType: 'text' }).pipe(
    map((response:any) => {

      console.log(response);
      
      try {
        // If response is plain text, try to parse it as JSON
        return JSON.parse(response);
      } catch (error) {
        // If parsing fails, return the raw text or handle accordingly
        return response;
      }
    })
  );
}


}
