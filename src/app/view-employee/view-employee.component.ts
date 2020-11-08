import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee-list/employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  _employee = new employee();
  constructor(private _service:EmployeeServiceService, private _route:Router , private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchEmployeeListbyIdFromRemote(id).subscribe(
      data=>{
       this._employee = data;
       console.log(this._employee.firstName);
      },
      error => console.log("error")
    )
  }
 
  listEmployee(){
    this._route.navigate(['/employeeList']);
  }
}
