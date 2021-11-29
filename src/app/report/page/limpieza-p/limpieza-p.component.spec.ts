import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaPComponent } from './limpieza-p.component';

describe('LimpiezaPComponent', () => {
  let component: LimpiezaPComponent;
  let fixture: ComponentFixture<LimpiezaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
