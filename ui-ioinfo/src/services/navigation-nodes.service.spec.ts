import { TestBed } from '@angular/core/testing';

import { NavigationNodesService } from './navigation-nodes.service';

describe('NavigationNodesService', () => {
  let service: NavigationNodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationNodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
