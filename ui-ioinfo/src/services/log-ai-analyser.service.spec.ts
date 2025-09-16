import { TestBed } from '@angular/core/testing';

import { LogAiAnalyserService } from './log-ai-analyser.service';

describe('LogAiAnalyserService', () => {
  let service: LogAiAnalyserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogAiAnalyserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
