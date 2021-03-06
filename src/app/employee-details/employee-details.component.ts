import { Component, OnInit } from '@angular/core';
import { never, NEVER } from 'rxjs';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees=<any>[];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
