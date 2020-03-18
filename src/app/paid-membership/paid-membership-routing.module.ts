import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaidMembershipComponent } from './paid-membership.component';


const routes: Routes = [
  {path: 'paid-membership', component: PaidMembershipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaidMembershipRoutingModule { }
