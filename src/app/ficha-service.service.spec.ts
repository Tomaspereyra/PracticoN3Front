import { TestBed } from '@angular/core/testing';

import { FichaServiceService } from './ficha-service.service';

describe('FichaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FichaServiceService = TestBed.get(FichaServiceService);
    expect(service).toBeTruthy();
  });
});
