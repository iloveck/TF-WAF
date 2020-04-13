import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'search-result', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
