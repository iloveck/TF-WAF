import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  jsonArrayObject = [
    {
        fname: 'Christopher',
        cardnumber: '132453636737',
        email: 'chris.noeln@gmail.com',
        Mobile: '(997)-689-9990'
    },
    {
      fname: 'Christopher1',
      cardnumber: '132453636737',
      email: 'chris.noeln@gmail.com',
      Mobile: '(997)-689-9990'
  },
  {
    fname: 'Christopher2',
    cardnumber: '132453636737',
    email: 'chris.noeln@gmail.com',
    Mobile: '(997)-689-9990'
},
{
  fname: 'Christopher3',
  cardnumber: '132453636737',
  email: 'chris.noeln@gmail.com',
  Mobile: '(997)-689-9990'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
