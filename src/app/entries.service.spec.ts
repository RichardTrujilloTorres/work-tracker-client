import { TestBed } from '@angular/core/testing';

import { EntriesService } from './entries.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: EntriesService = TestBed.get(EntriesService);
    expect(service).toBeTruthy();
  });
});
