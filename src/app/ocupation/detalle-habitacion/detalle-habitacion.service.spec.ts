import { TestBed } from '@angular/core/testing';

import { DetalleHabitacionService } from './detalle-habitacion.service';

describe('DetalleHabitacionService', () => {
  let service: DetalleHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
