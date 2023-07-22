import { Component, OnInit } from '@angular/core';
import { PricingConfiguration } from '../pricing-configuration.model';
import { PricingConfigurationService } from '../pricing-configuration.service';

@Component({
  selector: 'app-pricing-configuration-list',
  templateUrl: './pricing-configuration-list.component.html',
  styleUrls: ['./pricing-configuration-list.component.css'],
})
export class PricingConfigurationListComponent implements OnInit {
  pricingConfigurations: PricingConfiguration[] = [];

  constructor(private pricingService: PricingConfigurationService) {}

  ngOnInit(): void {
    this.loadPricingConfigurations();
  }

  loadPricingConfigurations(): void {
    this.pricingService.getAllPricingConfigurations().subscribe(
      (configurations) => {
        console.log(configurations);
        
        this.pricingConfigurations = configurations;
      },
      (error) => {
        console.error('Error fetching pricing configurations:', error);
      }
    );
  }
}
