import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoComponent } from './app-info/app-info.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    AppInfoComponent
  ],
  imports: [
    CommonModule,
      FooterModule,
        HeaderModule,
        LoginModule,
  ],
  exports:[AppInfoComponent,
      FooterModule,
        HeaderModule,
        LoginModule,
  ]
})
export class AppInfoModule { }
