import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LogAiAnalyserService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  API_BASE_URL: any = "http://localhost:8053";

  fetchBackendLogs(): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/api/logs/log-ai-analyser');
  }

  fetchFrontEndErrorLogs(): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/api/frontend-error/ui-log-ai-analyser');
  }

  logFrontendError(errorData: any): Observable<any> {
    const url = `${this.API_BASE_URL}/api/frontend-error`;
    return this.http.post(url, errorData);
  }

// discussions(data: any): Observable<any> {

//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json'
//   });

//   return this.http.post<any>(url, data, { headers });
// }
discussions(data: any): Observable<any> {
  const baseUrl = `${this.API_BASE_URL}/api/logs/discussions`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<any>(baseUrl, data, { headers }).pipe(
    tap(response => {
      console.log("Response from backend:", response);
    }),
    catchError(error => {
      console.error("Error in discussions():", error);
      return throwError(error);
    })
  );
}


  getDiscussion(): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/api/logs/get-discussion');
  }
  
  getClassifiedLogs(): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/api/logs/get-classified-logs');
  }

  
  clearAllDiscussions(): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/api/logs/discussion/clear-all`);
  }

  clearAllFrontendErrors(): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/api/frontend-error/clear-all`);
  }


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
