import { Component } from '@angular/core';
import { EmployeeService } from '../../../../services/employee.service';


export interface Employee {
  id: any;
  name: any;
  email: any;
  addressResponse:any;

}

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
a:any="djnd";
  empList:any[]=[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe((res:any)=>{
      this.empList=[res];
      console.log(res);     
    })  
  }
}
