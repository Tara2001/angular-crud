import { TestBed } from '@angular/core/testing';

import { Ser01Service } from './ser01.service';

describe('Ser01Service', () => {
  let service: Ser01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ser01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
