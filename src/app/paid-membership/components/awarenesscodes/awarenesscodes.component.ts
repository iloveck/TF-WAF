import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-membership-awarenesscodes',
  templateUrl: './awarenesscodes.component.html',
  styleUrls: ['./awarenesscodes.component.scss']
})
export class AwarenesscodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 selected10001 = false;
 selected62000 = false;
 selected22318 = false;
 selectedSearch = false;
 hellochange = "hi change indicator";
  
  onAwarenessSelection(selection){
    switch(selection){
      case 10001: {
        this.resetSelection();
        this.selected10001 = true;
        break;
      }
      case 62000: {
        this.resetSelection();
        this.selected62000 = true;
        break;
      }
      case 22318: {
        this.resetSelection();
        this.selected22318 = true;
        break;
      }
      default: {
        this.resetSelection();
        this.selectedSearch = true;
        break;
      }

    }
  }
  resetSelection(){
    this.selected10001 = false;
    this.selected62000 = false;
    this.selected22318 = false;
    this.selectedSearch = false;
  }
}
