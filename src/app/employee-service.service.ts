import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee-list/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private _http:HttpClient) { }

  fetchEmployeeListFromRemote():Observable<any>{
      return this._http.get("http://localhost:8080/api/findAll");
  }

  addEmployeeListFromRemote(employee:employee):Observable<any>{
    return this._http.post("http://localhost:8080/api/insert",employee);
}

  fetchEmployeeListbyIdFromRemote(id:Number):Observable<any>{
    return this._http.get("http://localhost:8080/api/findById/"+id);
}

  deleteEmployeeListbyIdFromRemote(id:Number):Observable<any>{
  return this._http.delete("http://localhost:8080/api/delete/"+id);
}

}
