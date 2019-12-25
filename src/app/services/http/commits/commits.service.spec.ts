import { TestBed } from '@angular/core/testing';

import { CommitsService } from './commits.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CommitsService = TestBed.get(CommitsService);
    expect(service).toBeTruthy();
  });
});
