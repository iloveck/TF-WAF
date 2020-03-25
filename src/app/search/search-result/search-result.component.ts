import { Component, OnInit } from '@angular/core';
import { FormatPhonePipe } from '../../shared/pipes/format-phone.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  persons: any[];
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }
  searchTerm: string = ''

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['term'];
    this.onSearch();
  }

    onSearch(): void {

      this.searchService.getSearch(this.searchTerm).subscribe(
        (data: any) => this.persons = data, // success path
        error => console.log(error) // error path
      );

    }


}


