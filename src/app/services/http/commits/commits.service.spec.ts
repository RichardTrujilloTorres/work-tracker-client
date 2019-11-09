import { TestBed } from '@angular/core/testing';

import { CommitsService } from './commits.service';

describe('CommitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommitsService = TestBed.get(CommitsService);
    expect(service).toBeTruthy();
  });
});
