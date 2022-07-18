import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdayComponent } from './studentday.component';

describe('StudentdayComponent', () => {
  let component: StudentdayComponent;
  let fixture: ComponentFixture<StudentdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
