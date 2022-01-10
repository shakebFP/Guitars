import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BassGuitarComponent } from './bass-guitar.component';

describe('BassGuitarComponent', () => {
  let component: BassGuitarComponent;
  let fixture: ComponentFixture<BassGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BassGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BassGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
