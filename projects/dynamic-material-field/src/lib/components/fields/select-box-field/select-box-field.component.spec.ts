import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxFieldComponent } from './select-box-field.component';

describe('SelectBoxFieldComponent', () => {
  let component: SelectBoxFieldComponent;
  let fixture: ComponentFixture<SelectBoxFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
