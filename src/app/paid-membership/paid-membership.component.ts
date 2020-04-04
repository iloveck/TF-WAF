import { Component, OnInit } from '@angular/core';

declare function require(path: string);
@Component({
  selector: 'app-paid-membership',
  templateUrl: './paid-membership.component.html',
  styleUrls: ['./paid-membership.component.scss']
})
export class PaidMembershipComponent implements OnInit {
  imageSrc = require('src/assets/images/Costco Logo.svg'); 
  employee = 'Chimay. S'
  constructor() { }

  ngOnInit(): void {
  }

}
