import { TestBed } from '@angular/core/testing';

import { SqlWebService } from './sql-web.service';

describe('SqlWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlWebService = TestBed.get(SqlWebService);
    expect(service).toBeTruthy();
  });
});
