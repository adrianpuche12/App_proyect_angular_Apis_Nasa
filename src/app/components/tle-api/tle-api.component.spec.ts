import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TleApiComponent } from './tle-api.component';

describe('TleApiComponent', () => {
  let component: TleApiComponent;
  let fixture: ComponentFixture<TleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TleApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
