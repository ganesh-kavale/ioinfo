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
  name:  registrationForm.value.name,
  emailId:  registrationForm.value.emailId,
  mobileNo:  registrationForm.value.mobileNo,
  username:  registrationForm.value.emailId,   // Optional: if backend uses email as username
  password:  registrationForm.value.password
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

//  saveUser(registrationForm: any): Observable<any> {  
  
//     const body = {       "username": registrationForm.value.username, "password":registrationForm.value.password }; // Ensure matching request body

 
//     // const loginConfirmUrl = `${this.baseUrl}/auth/login`;
//   const loginConfirmUrl = `${environment.rootUrl}/employee-app/api/user-registration`;


//     console.log(loginConfirmUrl);
//     console.log(body);
    
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//     return this.http.post<any>(loginConfirmUrl, body, { headers }).pipe(
//       tap(response => {
//         if (response.token) {
//           localStorage.setItem('token', response.token); // Store JWT token
//           console.log("Login Successful:", response);
//         }
//       }),
//       catchError(error => {
//         console.error("Login Failed:", error);
//         return throwError(error);
//       })
//     );
//   }


 }
 