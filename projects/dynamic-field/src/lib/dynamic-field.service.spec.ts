import { TestBed } from '@angular/core/testing';

import { AbstractGenerateFieldService } from './dynamic-field.service';

describe('DynamicFieldService', () => {
  let service: AbstractGenerateFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractGenerateFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
