import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { employee } from '../employee-list/employee';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = new employee();
  constructor(private _service:EmployeeServiceService, private _route:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    this._service.addEmployeeListFromRemote(this.employee).subscribe(
      data => {
        console.log("Success");
        this._route.navigate(['employeeList']);
      },
      error => console.log(this.employee.id,this.employee.firstName,this.employee.lastName,this.employee.salary)
    )
  }
  gotoList(){
    this._service.fetchEmployeeListFromRemote().subscribe(
      data => {
        console.log("Success");
        this._route.navigate(['employeeList']);
      },
      error => console.log("Error")
    )
  }
}
