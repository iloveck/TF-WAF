import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaidMembershipRoutingModule } from './paid-membership-routing.module';
import { PaidMembershipComponent } from './paid-membership.component';
import {TopBarComponent} from '../shared/components/top-bar/top-bar.component';
import { AwarenesscodesComponent } from './components/awarenesscodes/awarenesscodes.component';
import { HearaboutComponent } from './components/hearabout/hearabout.component';
import { CompleteprofileComponent } from './components/completeprofile/completeprofile.component';
import { CostcoBenefitsComponent } from './components/costco-benefits/costco-benefits.component';
import { MembershipCompletionComponent } from './components/membership-completion/membership-completion.component';

import {AwarenessCodeService} from './paid-membership-awareness-code-service';

@NgModule({
  declarations: [PaidMembershipComponent, TopBarComponent, AwarenesscodesComponent, HearaboutComponent, CompleteprofileComponent, CostcoBenefitsComponent, MembershipCompletionComponent],
  imports: [
    CommonModule,
    PaidMembershipRoutingModule
  ],
  providers: [AwarenessCodeService]
})
export class PaidMembershipModule { }
