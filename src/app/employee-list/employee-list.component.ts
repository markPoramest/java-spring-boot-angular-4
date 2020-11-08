import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee:employee[];
  constructor(private _service:EmployeeServiceService, private _route:Router) { }

  ngOnInit(): void {
    this._service.fetchEmployeeListFromRemote().subscribe(
      data=>{console.log("response recieved");
      this.employee = data;
      },
      error=>console.log("exception occured")
    );
  }
  gotoAddEmployee(){
    this._route.navigate(['/addEmployee']);
  }
  editEmployee(id:Number){
    this._route.navigate(['/editEmployee',id]);
  }

  viewEmployee(id:Number){
    this._route.navigate(['/viewEmployee',id]);
  }

  deleteEmployee(id:Number){
    this._service.deleteEmployeeListbyIdFromRemote(id).subscribe(
      data=>console.debug("Success"),
      error=>console.log("Error")
    )
    location.reload();
  }


}
