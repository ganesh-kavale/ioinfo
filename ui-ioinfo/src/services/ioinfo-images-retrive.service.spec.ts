import { TestBed } from '@angular/core/testing';

import { IoinfoImagesRetriveService } from './ioinfo-images-retrive.service';

describe('IoinfoImagesRetriveService', () => {
  let service: IoinfoImagesRetriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IoinfoImagesRetriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
