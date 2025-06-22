import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';



@NgModule({
  declarations: [
    HomepageContentComponent
  ],
  imports: [
    CommonModule   
  ],
  exports:[HomepageContentComponent]
})
export class HomepageContentModule { }
