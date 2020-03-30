import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [PageNotFoundComponent, TopBarComponent], 
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class ComponentsModule { }
