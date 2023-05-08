import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteCenterComponent } from './satellite-center.component';

describe('SatelliteCenterComponent', () => {
  let component: SatelliteCenterComponent;
  let fixture: ComponentFixture<SatelliteCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatelliteCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatelliteCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
