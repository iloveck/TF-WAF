import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { MembershipCompletionComponent } from './components/membership-completion/membership-completion.component';




@NgModule({
  declarations: [
    PageNotFoundComponent,
    TopBarComponent,
    FormatPhonePipe,
    MembershipCompletionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    TopBarComponent,
    FormatPhonePipe,
    MembershipCompletionComponent
  ]
})
export class SharedModule { }
