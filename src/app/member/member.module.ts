import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MemberComponent,
    CreateMemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MemberModule { }
