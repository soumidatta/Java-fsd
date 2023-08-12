import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl:string = "http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  markAttendance(data:any){
    return this.httpClient.post(this.baseUrl+"/markAttendance", data).subscribe(
      (error)=>console.log(error),
      (complete)=>console.log(complete)
      )
  }

  getMarkedAttendances():Observable<any>{
    return this.httpClient.get(this.baseUrl+"/markedAttendance")
  }

  deleteattendance(id:any){
    return this.httpClient.delete("http://localhost:8080/deleteAttendance?id="+id).subscribe()
  }

  updateAttendance(id:any, data:any){
    return this.httpClient.put(this.baseUrl+"/updateAttendance?id="+id, data)
  }

}
