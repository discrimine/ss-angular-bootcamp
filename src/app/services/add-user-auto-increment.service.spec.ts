import { TestBed, inject } from '@angular/core/testing';

import { AddUserAutoIncrementService } from './add-user-auto-increment.service';

describe('AddUserAutoIncrementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUserAutoIncrementService]
    });
  });

  it('should be created', inject([AddUserAutoIncrementService], (service: AddUserAutoIncrementService) => {
    expect(service).toBeTruthy();
  }));
});
