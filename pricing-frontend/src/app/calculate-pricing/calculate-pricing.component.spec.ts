import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePricingComponent } from './calculate-pricing.component';

describe('CalculatePricingComponent', () => {
  let component: CalculatePricingComponent;
  let fixture: ComponentFixture<CalculatePricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatePricingComponent]
    });
    fixture = TestBed.createComponent(CalculatePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
