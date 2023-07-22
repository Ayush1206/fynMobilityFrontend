import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricingConfigurationComponent } from './add-pricing-configuration.component';

describe('AddPricingConfigurationComponent', () => {
  let component: AddPricingConfigurationComponent;
  let fixture: ComponentFixture<AddPricingConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPricingConfigurationComponent]
    });
    fixture = TestBed.createComponent(AddPricingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
