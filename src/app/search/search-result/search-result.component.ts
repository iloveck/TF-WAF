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
  maxResultForWarning: number = 40;
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['term'];
    this.onSearch();
  }

  onSearch(): void {
    this.searchService.getSearch(this.searchTerm).subscribe(

      // success path
      (data: any) => {
        this.persons = data.results;
        this.totalSearchResults = data.totalCount;
        this.remainingResults = this.totalSearchResults - 20;
        console.log(this.remainingResults);
      },
      error => console.log(error) // error path
    );

  }

  LoadMore(): void {
    this.searchService.getSearch(this.searchTerm).subscribe(
      (data: any) => this.persons = this.persons.concat(data.results), // success path
      error => console.log(error) // error path
    );
  }

}


