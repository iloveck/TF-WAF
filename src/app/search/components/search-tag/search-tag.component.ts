import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent {

  @Input() tag: string;
  constructor() { }
}
