import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaidMembershipRoutingModule } from './paid-membership-routing.module';
import { PaidMembershipComponent } from './paid-membership.component';
import {TopBarComponent} from '../shared/components/top-bar/top-bar.component';
import { AwarenesscodesComponent } from './components/awarenesscodes/awarenesscodes.component';
import { HearaboutComponent } from './components/hearabout/hearabout.component';


@NgModule({
  declarations: [PaidMembershipComponent, TopBarComponent, AwarenesscodesComponent, HearaboutComponent],
  imports: [
    CommonModule,
    PaidMembershipRoutingModule
  ]
})
export class PaidMembershipModule { }
