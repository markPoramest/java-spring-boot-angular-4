import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'',component:EmployeeListComponent},
  {path:'addEmployee',component:EmployeeComponent},
  {path:'employeeList',component:EmployeeListComponent},
  {path:'editEmployee',component:EditEmployeeComponent},
  {path:'editEmployee/:id',component:EditEmployeeComponent},
  {path:'viewEmployee',component:ViewEmployeeComponent},
  {path:'viewEmployee/:id',component:ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
