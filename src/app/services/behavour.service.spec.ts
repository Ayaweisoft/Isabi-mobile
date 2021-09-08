import { TestBed } from '@angular/core/testing';

import { BehavourService } from './behavour.service';

describe('BehavourService', () => {
  let service: BehavourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
