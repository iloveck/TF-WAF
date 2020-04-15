import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormatPhonePipe } from '../../shared/pipes/format-phone.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SearchCriterion } from 'src/app/shared/models/search-criterion';
import { TempData } from './../../member/components/create-member/tempdata';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [TempData]
})

export class SearchResultComponent implements OnInit, OnDestroy {
  persons: any[] = [];
  searchTerm  = '';
  totalSearchResults = 0;
  remainingResults = 0;
  pageNumber = 1;
  meta: any;
  // To be moved to app settings
  maxResultForWarning = 40;
  pageSize = 20;

  searchCriterion = new SearchCriterion(
    '',
    1,
    {
      country: 'USA',
      state: '',
      firstName: '',
      lastName: '',
      address: ''
    }
  );

  constructor(private searchService: SearchService, private router: Router, private tempData: TempData) {
    document.body.style.overflowY = 'hidden';

    if (window.history.state !== null && window.history.state.term !== undefined) {
      sessionStorage.setItem('searchTerm', window.history.state.term);
    }
    if (sessionStorage.getItem('searchTerm') !== null) {
      this.searchTerm = sessionStorage.getItem('searchTerm');
      this.searchCriterion.searchText = sessionStorage.getItem('searchTerm');
    }
  }

  ngOnInit(): void {

    this.meta = this.tempData.getData();
    if ( this.searchTerm !== null && this.searchTerm !== '' ) {
      this.onSearch();
    } else {
      this.router.navigateByUrl('/search');
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('searchTerm');
  }

  onSearch(): void {
    this.searchService.getSearch(this.searchCriterion).subscribe(

      // success path
      (data: any) => {
        this.persons = data.results;
        this.totalSearchResults = data.totalCount;
        this.remainingResults = this.totalSearchResults - 20;
        this.searchCriterion.pageNumber = this.searchCriterion.pageNumber + 1;
      },

      // error path
      error => console.log(error)
    );

  }

  LoadMore(): void {
    this.searchService.getSearch(this.searchCriterion).subscribe(

      // success path
      (data: any) => {
        this.persons = this.persons.concat(data.results);
        this.searchCriterion.pageNumber = this.searchCriterion.pageNumber + 1;
        this.remainingResults = this.remainingResults - 20;
      },

      // error path
      error => console.log(error)
    );
  }
}
