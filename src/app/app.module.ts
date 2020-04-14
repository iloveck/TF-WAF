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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule, IConfig, MaskPipe } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);



registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    CoreModule,
    MemberModule,
    PaidMembershipModule,
    RewardsModule,
    SearchModule,
    SampleModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options)

  ],
  providers: [MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
