import { TestBed } from '@angular/core/testing';

import { GamenightService } from './gamenight.service';

describe('GamenightService', () => {
  let service: GamenightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamenightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
