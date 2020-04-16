import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';


const routes: Routes = [
  {path: 'member', component: MemberComponent,
    children: [
      {path: 'create', component: CreateMemberComponent},
      {path: 'create/:id', component: CreateMemberComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
