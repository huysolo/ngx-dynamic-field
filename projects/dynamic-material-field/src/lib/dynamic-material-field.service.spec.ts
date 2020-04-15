import { TestBed } from '@angular/core/testing';

import { DynamicMaterialFieldService } from './dynamic-material-field.service';

describe('DynamicMaterialFieldService', () => {
  let service: DynamicMaterialFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicMaterialFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
