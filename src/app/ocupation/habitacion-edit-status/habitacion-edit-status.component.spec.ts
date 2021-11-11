import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionEditStatusComponent } from './habitacion-edit-status.component';

describe('HabitacionEditStatusComponent', () => {
  let component: HabitacionEditStatusComponent;
  let fixture: ComponentFixture<HabitacionEditStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionEditStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
