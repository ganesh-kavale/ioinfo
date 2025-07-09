import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { AuthService } from '../../../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {


    constructor(private http: HttpClient, private router: Router, private authService:AuthService,private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {}

   logout(){
      if (isPlatformBrowser(this.platformId)) {
        localStorage.clear();       
      }
   }
}