import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarlistComponent } from './guitarlist.component';

describe('GuitarlistComponent', () => {
  let component: GuitarlistComponent;
  let fixture: ComponentFixture<GuitarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
