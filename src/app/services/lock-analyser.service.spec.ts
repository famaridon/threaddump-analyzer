import { TestBed, inject } from '@angular/core/testing';

import { LockAnalyserService } from './lock-analyser.service';

describe('LockAnalyserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockAnalyserService]
    });
  });

  it('should be created', inject([LockAnalyserService], (service: LockAnalyserService) => {
    expect(service).toBeTruthy();
  }));
});
