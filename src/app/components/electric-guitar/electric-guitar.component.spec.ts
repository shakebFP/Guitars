import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricGuitarComponent } from './electric-guitar.component';

describe('ElectricGuitarComponent', () => {
  let component: ElectricGuitarComponent;
  let fixture: ComponentFixture<ElectricGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
