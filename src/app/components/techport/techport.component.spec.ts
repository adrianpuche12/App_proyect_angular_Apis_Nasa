import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechportComponent } from './techport.component';

describe('TechportComponent', () => {
  let component: TechportComponent;
  let fixture: ComponentFixture<TechportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
