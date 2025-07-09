import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'js-storefront';
  private timeout: any;

    constructor(private authService: AuthService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.authService.clearTokenIfExpired();
    this.resetSessionTimer();

      if (isPlatformBrowser(this.platformId)) {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login'], { queryParams: { sessionExpired: true } });
    }}
   
  }

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  @HostListener('window:click')
  resetSessionTimer(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.authService.isTokenExpired()) {
         if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('token');
        this.router.navigate(['/login'], { queryParams: { sessionExpired: true } });
      }
    }
    });  
  }
}
  