import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsblogComponent } from './commonsblog/commonsblog.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonsblogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[CommonsblogComponent]
})
export class CommonsblogModule { }
