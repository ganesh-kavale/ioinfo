import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage/homepage.component';
import { LoginComponent } from './features/login/login/login.component';
import { CommonsblogComponent } from './features/commonsblog/commonsblog/commonsblog.component';
import { AboutMeComponent } from './features/about-me/about-me/about-me.component';
import { AppInfoComponent } from './features/app-info/app-info/app-info.component';

const routes: Routes = [
  {
    path: '',
    component: AppInfoComponent
  },
  {
    path: 'login',
    component: AppInfoComponent
  },
  // {
  //   path: 'home',
  //   component: HomepageComponent
  // },

  // {
  //   path: 'about-me',
  //   component: AboutMeComponent
  // },
  // {
  //   path: 'commonsblog',
  //   component: CommonsblogComponent
  // },

  {
    path: 'containers',
    // canActivate: [AuthGuard],
    loadChildren: () => import('../app/features/containers.module').then(m => m.ContainersModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
