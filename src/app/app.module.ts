import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SampleModule } from './sample/sample.module';
import { MemberModule } from './member/member.module';
import { PaidMembershipModule } from './paid-membership/paid-membership.module';
import { RewardsModule } from './rewards/rewards.module';
import { SearchModule } from './search/search.module';


registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MemberModule,
    PaidMembershipModule,
    RewardsModule,
    SearchModule,
    SampleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
