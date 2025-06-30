import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomepageModule } from '../homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationNodesModule } from '../navigation-nodes/navigation-nodes.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule, ReactiveFormsModule,
NavigationNodesModule,
   FooterModule,
    HeaderModule,
],
  exports:[LoginComponent,
    FooterModule,
    HeaderModule,
  ]
})
export class LoginModule { }
