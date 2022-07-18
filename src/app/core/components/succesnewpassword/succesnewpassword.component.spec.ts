import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesnewpasswordComponent } from './succesnewpassword.component';

describe('SuccesnewpasswordComponent', () => {
  let component: SuccesnewpasswordComponent;
  let fixture: ComponentFixture<SuccesnewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesnewpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesnewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
