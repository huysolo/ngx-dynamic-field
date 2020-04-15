import { TestBed } from '@angular/core/testing';

import { DynamicAntGenerateFieldService } from './dynamic-ant-field.service';

describe('DynamicAntFieldService', () => {
  let service: DynamicAntGenerateFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicAntGenerateFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
