import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaidMembershipRoutingModule } from './paid-membership-routing.module';
import { PaidMembershipComponent } from './paid-membership.component';
import { AwarenesscodesComponent } from './components/awarenesscodes/awarenesscodes.component';
import { HearaboutComponent } from './components/hearabout/hearabout.component';
import { CompleteprofileComponent } from './components/completeprofile/completeprofile.component';
import { CostcoBenefitsComponent } from './components/costco-benefits/costco-benefits.component';
import { SharedModule } from '../shared/shared.module';

import {AwarenessCodeService} from './paid-membership-awareness-code-service';

@NgModule({
  declarations: [
    PaidMembershipComponent,
    AwarenesscodesComponent,
    HearaboutComponent,
    CompleteprofileComponent,
    CostcoBenefitsComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    PaidMembershipRoutingModule
  ],
  providers: [AwarenessCodeService]
})
export class PaidMembershipModule { }
