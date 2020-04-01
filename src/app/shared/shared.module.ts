import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FormatPhonePipe } from './pipes/format-phone.pipe';




@NgModule({
  declarations: [
    PageNotFoundComponent,
    TopBarComponent,
    FormatPhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    TopBarComponent,
    FormatPhonePipe
  ]
})
export class SharedModule { }
