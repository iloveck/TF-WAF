import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mglo-web';
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

  today: number = Date.now();
  hour: number = (new Date()).getHours();
}
