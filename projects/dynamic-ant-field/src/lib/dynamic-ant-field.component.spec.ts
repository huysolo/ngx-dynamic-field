import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAntFieldComponent } from './dynamic-ant-field.component';

describe('DynamicAntFieldComponent', () => {
  let component: DynamicAntFieldComponent;
  let fixture: ComponentFixture<DynamicAntFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAntFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAntFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
