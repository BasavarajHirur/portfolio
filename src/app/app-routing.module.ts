import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProjectDetailsComponent } from './components';
import { PaymentPoliciesComponent, PrivacyPolicyComponent, ShippingPoliciesComponent, TermsAndConditionsComponent } from './components/policies';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'payment-policies', component: PaymentPoliciesComponent
  },
  {
    path: 'privacy-policies', component: PrivacyPolicyComponent
  },
  {
    path: 'shipping-policies', component: ShippingPoliciesComponent
  },
  {
    path: 'terms-and-conditions', component: TermsAndConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
