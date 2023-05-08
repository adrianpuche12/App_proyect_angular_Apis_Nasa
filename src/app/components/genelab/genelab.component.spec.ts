import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenelabComponent } from './genelab.component';

describe('GenelabComponent', () => {
  let component: GenelabComponent;
  let fixture: ComponentFixture<GenelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
