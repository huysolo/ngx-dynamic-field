import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResolverComponent } from './form-resolver.component';

describe('FormResolverComponent', () => {
  let component: FormResolverComponent;
  let fixture: ComponentFixture<FormResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
