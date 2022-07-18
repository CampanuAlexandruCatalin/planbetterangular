import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttimerComponent } from './studenttimer.component';

describe('StudenttimerComponent', () => {
  let component: StudenttimerComponent;
  let fixture: ComponentFixture<StudenttimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenttimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
