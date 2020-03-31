import { Component, OnInit } from '@angular/core';
declare function require(path: string);
@Component({
  selector: 'app-shared-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
 
  employee = 'Chimay. S'
  location = 'Seattle, WA #1234'
  date = 'Friday, July 12'
  constructor() { }

  ngOnInit(): void {
  }

}
