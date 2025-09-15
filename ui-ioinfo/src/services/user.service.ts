import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // /auth-service/api
  constructor(private http: HttpClient, private sharedService: SharedService) { }

  saveUser(registrationForm: any): Observable<any> {
    const saveUserUrl = `${environment.rootUrl}/employee-app/api/user-registration`;
    const body = {
      name: registrationForm.value.name,
      emailId: registrationForm.value.emailId,
      mobileNo: registrationForm.value.mobileNo,
      username: registrationForm.value.emailId,   // Optional: if backend uses email as username
      password: registrationForm.value.password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    console.log('[saveUser] POST URL:', saveUserUrl);
    console.log('[saveUser] Form Data:', body);

    return this.http.post<any>(saveUserUrl, body, { headers }).pipe(
      map((response) => {
        console.log('[saveUser] Response:', response);
        return response; // responseType is default JSON
      })
    );
  }
  baseUrl = "http://localhost:8091";
  letsConnect(letsConnectForm: any, selectedFile: any): Observable<any> {
  const formData: FormData = new FormData();

  formData.append('file', selectedFile);
  formData.append('body', letsConnectForm.value.body);
  formData.append('emailId', letsConnectForm.value.emailId);
  formData.append('mobileNo', letsConnectForm.value.mobileNo);
  formData.append('subject', letsConnectForm.value.subject);
  formData.append('name', letsConnectForm.value.name);

  this.baseUrl = `${environment.rootUrl}/employee-app/api`;
  const serviceUrlFile = `${this.baseUrl}/lets-connect`;

  // ❌ don’t set Content-Type manually, browser will set multipart boundary
  return this.http.post(serviceUrlFile, formData, { responseType: 'text' }).pipe(
    map((response: any) => {
      try {
        return JSON.parse(response);
      } catch {
        return response;
      }
    })
  );
}



}
