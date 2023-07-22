import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PricingConfiguration } from './pricing-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class PricingConfigurationService {
  private apiUrl = 'http://localhost:3000'; // Replace with your Nest.js API URL

  constructor(private http: HttpClient) {}

  getAllPricingConfigurations(): Observable<PricingConfiguration[]> {
    return this.http.get<PricingConfiguration[]>(`${this.apiUrl}/pricing`);
  }

  // Add other methods for creating, updating, and deleting pricing configurations if needed
}
