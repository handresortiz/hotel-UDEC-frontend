import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitycsComponent } from './politycs.component';

describe('PolitycsComponent', () => {
  let component: PolitycsComponent;
  let fixture: ComponentFixture<PolitycsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitycsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
