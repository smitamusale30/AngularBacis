import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees()
  {
    return [
      {"id":1, "name": "Andrew", "age": 30},
      {"id":2, "name": "ABC", "age": 22},
      {"id":3, "name": "XYZ", "age": 26},
      {"id":4, "name": "PQR", "age": 35},
    ];
  }
}
