import { TestBed } from '@angular/core/testing';

import { RegistarService } from './registar.service';

describe('RegistarService', () => {
  let service: RegistarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
