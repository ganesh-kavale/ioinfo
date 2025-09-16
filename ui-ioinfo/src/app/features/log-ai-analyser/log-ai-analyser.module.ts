import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogAiAnalyserComponent } from './log-ai-analyser/log-ai-analyser.component';
import { MaterialsModule } from '../../materials/materials.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogAiAnalyserComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule
  ]
})
export class LogAiAnalyserModule { }
