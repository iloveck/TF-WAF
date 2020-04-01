import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchTagComponent } from './components/search-tag/search-tag.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SearchComponent, SearchHeaderComponent, SearchResultComponent, SearchTagComponent, PersonCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SearchHeaderComponent,
    SearchRoutingModule
  ]
})
export class SearchModule { }
