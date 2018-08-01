import { TestBed, inject } from '@angular/core/testing';

import { IsAuthService } from './is-auth.service';

describe('IsAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthService]
    });
  });

  it('should be created', inject([IsAuthService], (service: IsAuthService) => {
    expect(service).toBeTruthy();
  }));
});
