import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaidMembershipComponent } from './paid-membership.component';
import { HearaboutComponent } from './components/hearabout/hearabout.component';
import { CompleteprofileComponent } from './components/completeprofile/completeprofile.component';
import { CostcoBenefitsComponent } from './components/costco-benefits/costco-benefits.component';


const routes: Routes = [
  {path: 'paid-membership', component: PaidMembershipComponent,
  children: [
    {path: 'hearabout', component: HearaboutComponent},
    {path: 'completeprofile', component: CompleteprofileComponent},
    {path: 'costco-benefits', component: CostcoBenefitsComponent}
]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaidMembershipRoutingModule { }
