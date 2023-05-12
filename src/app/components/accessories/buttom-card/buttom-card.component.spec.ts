import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomCardComponent } from './buttom-card.component';

describe('ButtomCardComponent', () => {
  let component: ButtomCardComponent;
  let fixture: ComponentFixture<ButtomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
