import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoirNoteComponent } from './memoir-note/memoir-note.component';
import { MemoirRoutingModule } from './memoir-routing.module';
import { CommonsblogModule } from '../features/commonsblog/commonsblog.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MemoirNoteComponent
  ],
  imports: [
    CommonModule,
    MemoirRoutingModule,
    CommonsblogModule,
        MatCardModule,
        MatIconModule
  ]
})
export class MemoirNoteModule { }
