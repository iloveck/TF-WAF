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
  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Search " + sessionStorage.getItem("searchTerm"));
    this.hour = (new Date()).getHours();
  }

  onSearch(): void {
    this.router.navigateByUrl('/search-result', { state: { term: this.searchTerm } });
  }
}
