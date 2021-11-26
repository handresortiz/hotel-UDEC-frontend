import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposhabitacionesComponent } from './tiposhabitaciones.component';

describe('TiposhabitacionesComponent', () => {
  let component: TiposhabitacionesComponent;
  let fixture: ComponentFixture<TiposhabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposhabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposhabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
