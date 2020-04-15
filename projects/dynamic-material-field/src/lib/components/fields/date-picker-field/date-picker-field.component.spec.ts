import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFieldComponent } from './date-picker-field.component';

describe('DatePickerFieldComponent', () => {
  let component: DatePickerFieldComponent;
  let fixture: ComponentFixture<DatePickerFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
