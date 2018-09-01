import { TestBed, inject } from '@angular/core/testing';

import { FinduserService } from './finduser.service';

describe('FinduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinduserService]
    });
  });

  it('should be created', inject([FinduserService], (service: FinduserService) => {
    expect(service).toBeTruthy();
  }));
});
