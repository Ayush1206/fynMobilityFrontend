import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PricingConfiguration } from './pricing-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class PricingConfigurationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllPricingConfigurations(): Observable<PricingConfiguration[]> {
    console.log("logging the results");
    console.log(this.http.get<PricingConfiguration[]>(`${this.apiUrl}/pricing`));
    
    
    return this.http.get<PricingConfiguration[]>(`${this.apiUrl}/pricing`);
  }

  
}
