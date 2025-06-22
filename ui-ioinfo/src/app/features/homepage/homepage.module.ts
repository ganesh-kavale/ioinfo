import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginModule } from '../login/login.module';
import { ContentsModule } from '../contents/contents.module';
import { RouterModule } from '@angular/router';
import { TopHeaderModule } from '../top-header/top-header.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
     FooterModule,
    HeaderModule,
    LoginModule,
    RouterModule,
    TopHeaderModule
    ],
  exports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    LoginModule,
    RouterModule,
    TopHeaderModule

  ]
})
export class HomepageModule { }
