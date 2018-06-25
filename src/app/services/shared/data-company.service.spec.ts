import { TestBed, inject } from '@angular/core/testing';

import { DataCompanyService } from './data-company.service';

describe('DataCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCompanyService]
    });
  });

  it('should be created', inject([DataCompanyService], (service: DataCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
