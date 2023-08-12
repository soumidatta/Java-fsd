import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceUpdateComponent } from './update-attendance.component';



describe('UpdateAttendanceComponent', () => {
  let component: AttendanceUpdateComponent;
  let fixture: ComponentFixture<AttendanceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceUpdateComponent]
    });
    fixture = TestBed.createComponent(AttendanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
