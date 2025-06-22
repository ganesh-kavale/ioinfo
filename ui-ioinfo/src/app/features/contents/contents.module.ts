import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents/contents.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    ContentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ContentsComponent]
})
export class ContentsModule { }
