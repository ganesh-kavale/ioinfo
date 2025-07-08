import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomepageContentComponent
  ],
  imports: [
    CommonModule   ,
       FormsModule,
        ReactiveFormsModule ,
  ],
  exports:[HomepageContentComponent]
})
export class HomepageContentModule { }
