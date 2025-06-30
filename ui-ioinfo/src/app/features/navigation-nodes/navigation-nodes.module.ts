import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationNodesComponent } from './navigation-nodes/navigation-nodes.component';



@NgModule({
  declarations: [
    NavigationNodesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavigationNodesComponent]
})
export class NavigationNodesModule { }
