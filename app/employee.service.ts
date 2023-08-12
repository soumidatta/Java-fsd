import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getEmployee(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/employee?id=${id}`);
  }
  
}
