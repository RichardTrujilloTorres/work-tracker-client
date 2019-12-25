import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: PaginationService = new PaginationService(1, 10);
    expect(service).toBeTruthy();
  });
});
