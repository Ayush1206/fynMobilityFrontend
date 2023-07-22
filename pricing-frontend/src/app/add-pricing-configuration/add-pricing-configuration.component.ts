import { Component } from '@angular/core';
import { AddPricingtConfiguration } from '../add-pricing.model';
import { AddPricingtResponce } from '../add-pricing-responce.model';
import { PricingConfigurationService } from '../pricing-configuration.service';

@Component({
  selector: 'app-add-pricing-configuration',
  templateUrl: './add-pricing-configuration.component.html',
  styleUrls: ['./add-pricing-configuration.component.css'],
})
export class AddPricingConfigurationComponent {
  pricingConfiguration: AddPricingtConfiguration = {
    NAME: '',
    DBP: 0,
    DAP: 0,
    TMF: 0,
    WC: 0,
  };

  successMessage: string | null = null;

  constructor(private pricingService: PricingConfigurationService) {}

  addPricingConfiguration(): void {
    this.pricingService.addPricingConfiguration(this.pricingConfiguration).subscribe(
      (response) => {
        console.log('Pricing configuration added:', response);
        this.successMessage = 'Pricing configuration added successfully!';
      },
      (error) => {
        console.error('Error adding pricing configuration:', error);
        this.successMessage = null;
      }
    );
  }
}
