import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingConfigurationListComponent } from './pricing-configuration-list/pricing-configuration-list.component';
import { CalculatePricingComponent } from './calculate-pricing/calculate-pricing.component';
import { FormsModule } from '@angular/forms';
import { AddPricingConfigurationComponent } from './add-pricing-configuration/add-pricing-configuration.component'; 

@NgModule({
  declarations: [AppComponent, PricingConfigurationListComponent, CalculatePricingComponent, AddPricingConfigurationComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
