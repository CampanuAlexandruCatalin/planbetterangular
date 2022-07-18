import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindayComponent } from './adminday.component';

describe('AdmindayComponent', () => {
  let component: AdmindayComponent;
  let fixture: ComponentFixture<AdmindayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
