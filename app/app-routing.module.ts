import { AttendanceComponent } from './attendance/attendance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AttendanceUpdateComponent } from './update-attendance/update-attendance.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'markAttendance', component: AttendanceComponent },
      {path:'updateOrDelete', component:AttendanceUpdateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
