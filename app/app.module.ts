import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceUpdateComponent } from './update-attendance/update-attendance.component';
import { AttendanceService } from './attendance.service';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    AttendanceComponent,
    AttendanceUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
