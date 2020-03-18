import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { SearchComponent } from './search/search.component';
import { MemberComponent } from './member/member.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PaidMembershipComponent } from './paid-membership/paid-membership.component';


const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: 'member', component: MemberComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'paid-membership', component: PaidMembershipComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
