import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaidMembershipRoutingModule } from './paid-membership-routing.module';
import { PaidMembershipComponent } from './paid-membership.component';


@NgModule({
  declarations: [PaidMembershipComponent],
  imports: [
    CommonModule,
    PaidMembershipRoutingModule
  ]
})
export class PaidMembershipModule { }
