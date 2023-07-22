import { Component } from '@angular/core';
import { CalculateRequest } from '../calculate-request.model';
import { CalculateResponse } from '../calculate-response.model';
import { PricingConfigurationService } from '../pricing-configuration.service';

@Component({
  selector: 'app-calculate-pricing',
  templateUrl: './calculate-pricing.component.html',
  styleUrls: ['./calculate-pricing.component.css'],
})
export class CalculatePricingComponent {
  calculateRequest: CalculateRequest = {
    DBP: 0,
    Dn: 0,
    DAP: 0,
    Tn: 0,
    TMF: 0,
    WC: 0, // Initialize WC with a default numeric value (e.g., 0)
  };

  calculatedPrice: number | null = null;

  constructor(private pricingService: PricingConfigurationService) {}

  calculatePricing(): void {
    this.pricingService.calculatePricing(this.calculateRequest).subscribe(
      (response: CalculateResponse) => {
        this.calculatedPrice = response.price;
      },
      (error) => {
        console.error('Error calculating pricing:', error);
      }
    );
  }
}

