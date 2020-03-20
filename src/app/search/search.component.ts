import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  today: number = Date.now();
  hour: number = (new Date()).getHours();


  constructor() { }

  ngOnInit(): void {
    this.hour = (new Date()).getHours();
  }

}
