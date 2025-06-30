import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';



@NgModule({
  declarations: [
    TopHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TopHeaderComponent]
})
export class TopHeaderModule { }
