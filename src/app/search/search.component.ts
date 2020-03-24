import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  today: number = Date.now();
  hour: number = (new Date()).getHours();
  searchTerm = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.hour = (new Date()).getHours();
  }

  onSearch(): void {
    this.router.navigateByUrl('/search-result/' + this.searchTerm);
    //this.router.navigate(['/Search-result'], {queryParams: {term: this.searchTerm}});


  }

}
