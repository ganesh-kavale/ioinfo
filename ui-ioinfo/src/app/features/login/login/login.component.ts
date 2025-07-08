import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class LoginComponent implements OnInit {


  username: string = '';
  password: string = '';

  loginform: any;


  constructor(private http: HttpClient, private router: Router, private authService:AuthService) {}
  ngOnInit(): void {
    this.loginform = new FormGroup({

      username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])

    });  }


  login() {

   

    console.log("kjhgfdcxz",this.loginform);
    
    // this.authService.testAPI()
    //   .subscribe(response => {

    //     console.log(response,'lkjhgfgh');
        
    //     localStorage.setItem('token', response.token);
    //     this.router.navigate(['commonsblog']);
    //   }, error => {
    //     alert('Invalid Credentials');
    //   });

    console.log("kjhgfdcxz",this.loginform);
    
    this.authService.login(this.loginform.value.username,this.loginform.value.password)
      .subscribe(response => {

        console.log(response,'lkjhgfgh');
        
        localStorage.setItem('token', response.token);

        console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnn",response.token);
        
        this.router.navigate(['containers']);
      }, error => {
        alert('Invalid Credentials');
      });
  }

}
