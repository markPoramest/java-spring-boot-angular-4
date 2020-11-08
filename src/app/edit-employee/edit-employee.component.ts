import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee-list/employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee = new employee();
  constructor(private _service:EmployeeServiceService, private _route:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
   this._service.fetchEmployeeListbyIdFromRemote(id).subscribe(
     data=>{
      console.log("Success");
      this.employee = data;
     },
     error => console.log("error")
   )

  }
  updateEmployee(){
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
