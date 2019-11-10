import { TestBed } from '@angular/core/testing';

import { BranchesService } from './branches.service';

describe('BranchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchesService = TestBed.get(BranchesService);
    expect(service).toBeTruthy();
  });
});
