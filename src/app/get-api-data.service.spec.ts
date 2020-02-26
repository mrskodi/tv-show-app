import { TestBed } from '@angular/core/testing';

import { GetApiDataService } from './get-api-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetApiDataService', () => {
  let service: GetApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GetApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
