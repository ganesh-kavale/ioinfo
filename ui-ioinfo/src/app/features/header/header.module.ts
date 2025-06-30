import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../../materials/materials.module';
import { RouterModule } from '@angular/router';
import { TopHeaderModule } from '../top-header/top-header.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule,
    TopHeaderModule
    
  ],
  exports: [
    HeaderComponent,  // Export the footer component to be used in other modules
  ],
})
export class HeaderModule { }
