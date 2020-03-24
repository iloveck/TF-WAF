import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';


@NgModule({
  declarations: [MemberComponent],
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
