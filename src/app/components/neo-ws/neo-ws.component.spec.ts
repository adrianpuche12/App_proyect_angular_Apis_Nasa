import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoWsComponent } from './neo-ws.component';

describe('NeoWsComponent', () => {
  let component: NeoWsComponent;
  let fixture: ComponentFixture<NeoWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoWsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
