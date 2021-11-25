import { TestBed } from '@angular/core/testing';

import { ValidarTokenGuardGuard } from './validar-token-guard.guard';

describe('ValidarTokenGuardGuard', () => {
  let guard: ValidarTokenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarTokenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
