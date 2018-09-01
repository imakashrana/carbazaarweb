import { TestBed, inject } from '@angular/core/testing';

import { ToasterserviceService } from './toasterservice.service';

describe('ToasterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterserviceService]
    });
  });

  it('should be created', inject([ToasterserviceService], (service: ToasterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
