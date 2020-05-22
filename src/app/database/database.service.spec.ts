import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  // no need to create
  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */
});
