import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingConfigurationListComponent } from './pricing-configuration-list/pricing-configuration-list.component';
import { CalculatePricingComponent } from './calculate-pricing/calculate-pricing.component';

const routes: Routes = [
  { path: '', redirectTo: '/pricing-configurations', pathMatch: 'full' },
  { path: 'pricing-configurations', component: PricingConfigurationListComponent },
  { path: 'calculate-pricing', component: CalculatePricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
