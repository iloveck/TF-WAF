import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormatPhonePipe } from '../shared/pipes/format-phone.pipe';





@NgModule({
  declarations: [SearchComponent, SearchHeaderComponent, SearchResultComponent, FormatPhonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchHeaderComponent
  ]
})
export class SearchModule { }
