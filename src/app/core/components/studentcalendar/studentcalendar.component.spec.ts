import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcalendarComponent } from './studentcalendar.component';

describe('StudentcalendarComponent', () => {
  let component: StudentcalendarComponent;
  let fixture: ComponentFixture<StudentcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
