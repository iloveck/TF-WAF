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

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
    document.body.style.overflowY = 'hidden'
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['term'];
    this.onSearch();
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


