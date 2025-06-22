import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], // This should be here, not in imports

})
export class EmployeeListModule { }
