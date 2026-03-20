import { TestBed } from '@angular/core/testing';

import { Gameprogress } from './gameprogress';

describe('Gameprogress', () => {
  let service: Gameprogress;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gameprogress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
