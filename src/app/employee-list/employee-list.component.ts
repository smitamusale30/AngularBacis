import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //drawback of code is : we have to write the array at list n details that means we are repeating same code.
  //that means the output employee-list and employee-details is dependened on list of employee 
  // that why we use DI
  public employees=<any>[];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(){
    this.employees= this._employeeService.getEmployees();
  }

}
