import { TestBed } from '@angular/core/testing';

import { BranchesService } from './branches.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BranchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BranchesService = TestBed.get(BranchesService);
    expect(service).toBeTruthy();
  });
});
