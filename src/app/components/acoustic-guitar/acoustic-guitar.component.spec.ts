import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcousticGuitarComponent } from './acoustic-guitar.component';

describe('AcousticGuitarComponent', () => {
  let component: AcousticGuitarComponent;
  let fixture: ComponentFixture<AcousticGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcousticGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcousticGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
