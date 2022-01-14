import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansSimulationComponent } from './loans-simulation.component';

describe('LoansSimulationComponent', () => {
  let component: LoansSimulationComponent;
  let fixture: ComponentFixture<LoansSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
