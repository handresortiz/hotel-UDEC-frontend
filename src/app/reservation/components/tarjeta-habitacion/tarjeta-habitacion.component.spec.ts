import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHabitacionComponent } from './tarjeta-habitacion.component';

describe('TarjetaHabitacionComponent', () => {
  let component: TarjetaHabitacionComponent;
  let fixture: ComponentFixture<TarjetaHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
