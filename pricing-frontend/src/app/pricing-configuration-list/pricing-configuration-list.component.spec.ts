import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingConfigurationListComponent } from './pricing-configuration-list.component';

describe('PricingConfigurationListComponent', () => {
  let component: PricingConfigurationListComponent;
  let fixture: ComponentFixture<PricingConfigurationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingConfigurationListComponent]
    });
    fixture = TestBed.createComponent(PricingConfigurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
