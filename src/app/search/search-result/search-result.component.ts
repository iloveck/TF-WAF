import { Component, OnInit } from '@angular/core';
import { FormatPhonePipe } from '../../shared/pipes/format-phone.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {
  persons: any[]=[];
  searchTerm: string = '';
  totalSearchResults: number = 0;
  remainingResults: number = 0;
  pageNumber:number = 1;

  // To be moved to app settings
  maxResultForWarning: number = 40;
  pageSize: number = 20

  constructor(private searchService: SearchService, private router: Router) {
    document.body.style.overflowY = 'hidden';
    if (window.history.state.term != undefined)
    {
      sessionStorage.setItem("searchTerm", window.history.state.term);
    }
    if (sessionStorage.getItem("searchTerm") != null)
    {
      this.searchTerm = sessionStorage.getItem("searchTerm");
    }
  }

  ngOnInit(): void {
    if ( this.searchTerm != null && this.searchTerm != '' )
    {
      this.onSearch();
    }
    else
    {
      this.router.navigateByUrl('/search')
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("searchTerm");
  }

  onSearch(): void {
    this.searchService.getSearch(this.searchTerm, this.pageNumber).subscribe(

      // success path
      (data: any) => {
        this.persons = data.results;
        this.totalSearchResults = data.totalCount;
        this.remainingResults = this.totalSearchResults - 20;
        this.pageNumber = this.pageNumber + 1;
      },

      // error path
      error => console.log(error)
    );

  }

  LoadMore(): void {
    this.searchService.getSearch(this.searchTerm, this.pageNumber).subscribe(

      // success path
      (data: any) =>
      {
        this.persons = this.persons.concat(data.results);
        this.pageNumber = this.pageNumber + 1;
        this.remainingResults = this.remainingResults - 20;
      },

      // error path
      error => console.log(error)
    );
  }
}


