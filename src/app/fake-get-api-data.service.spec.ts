import { TestBed } from '@angular/core/testing';

import { FakeGetApiDataService } from './fake-get-api-data.service';

describe('FakeGetApiDataService', () => {
  let service: FakeGetApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeGetApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
