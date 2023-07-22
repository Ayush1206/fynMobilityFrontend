import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { PricingConfiguration } from './pricing-configuration.model';
import { AddPricingtConfiguration } from './add-pricing.model';
import { AddPricingtResponce } from './add-pricing-responce.model';
import { CalculateRequest } from './calculate-request.model';
import {  CalculateResponse } from './calculate-response.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PricingConfigurationService {
  private apiUrl = 'http://localhost:3000'; // Replace with your Nest.js API URL

  constructor(private http: HttpClient) {}

  getAllPricingConfigurations(): Observable<PricingConfiguration[]> {
    return this.http.get<PricingConfiguration[]>(`${this.apiUrl}/pricing`);
  }

addPricingConfiguration(pricingConfiguration: AddPricingtConfiguration): Observable<AddPricingtResponce> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Make sure pricingConfiguration matches the data structure expected by the Nest.js API
    // You may need to update the field names based on the API's requirements
    const requestBody = {
      NAME: pricingConfiguration.NAME,
      DBP: pricingConfiguration.DBP,
      DAP: pricingConfiguration.DAP,
      TMF: pricingConfiguration.TMF,
      WC: pricingConfiguration.WC
    };

    return this.http.post<any>(`${this.apiUrl}/pricing`, requestBody, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  getPricingConfigurationById(id: string): Observable<PricingConfiguration> {
    return this.http.get<PricingConfiguration>(`${this.apiUrl}/pricing/${id}`);
  }

  calculatePricing(request: CalculateRequest): Observable<CalculateResponse> {
    return this.http.post<CalculateResponse>(`${this.apiUrl}/pricing/calculate`, request);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

}
