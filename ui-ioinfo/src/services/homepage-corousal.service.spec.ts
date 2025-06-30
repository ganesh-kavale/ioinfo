import { TestBed } from '@angular/core/testing';

import { HomepageCorousalService } from './homepage-corousal.service';

describe('HomepageCorousalService', () => {
  let service: HomepageCorousalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageCorousalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
