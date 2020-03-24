import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  today: number = Date.now();
  hour: number = (new Date()).getHours();
  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
  }

}
