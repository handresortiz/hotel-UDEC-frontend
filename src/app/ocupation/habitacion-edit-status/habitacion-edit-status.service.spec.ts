import { TestBed } from '@angular/core/testing';

import { HabitacionEditStatusService } from './habitacion-edit-status.service';

describe('HabitacionEditStatusService', () => {
  let service: HabitacionEditStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionEditStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
