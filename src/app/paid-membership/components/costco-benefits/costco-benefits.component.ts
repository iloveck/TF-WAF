import { Component, OnInit } from '@angular/core';
declare function require(path: string);
@Component({
  selector: 'app-costco-benefits',
  templateUrl: './costco-benefits.component.html',
  styleUrls: ['./costco-benefits.component.scss']
})
export class CostcoBenefitsComponent implements OnInit {
  imageSrc = require('src/assets/images/Costco Benefits.svg');
  constructor() { }

  ngOnInit(): void {
  }

}
