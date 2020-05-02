import { TestBed } from '@angular/core/testing';

import { LogInLogicService } from './log-in-logic.service';

describe('LogInLogicService', () => {
  let service: LogInLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
