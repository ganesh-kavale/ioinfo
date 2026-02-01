import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetsConnectComponent } from './lets-connect/lets-connect.component';



@NgModule({
  declarations: [LetsConnectComponent],
  imports: [
    CommonModule,
        FormsModule,
         ReactiveFormsModule ,
   ],
   exports:[LetsConnectComponent]
})
export class LetsConnectModule { }
