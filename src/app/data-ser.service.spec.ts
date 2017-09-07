import { TestBed, inject } from '@angular/core/testing';

import { DataSerService } from './data-ser.service';

describe('DataSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSerService]
    });
  });

  it('should be created', inject([DataSerService], (service: DataSerService) => {
    expect(service).toBeTruthy();
  }));
});
