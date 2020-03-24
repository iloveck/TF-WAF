import { Component, OnInit } from '@angular/core';
import { FormatPhonePipe } from '../../shared/pipes/format-phone.pipe'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {


  jsonArrayObject = {
    "@odata.context": "https://membersearch.search.windows.net/indexes('persons-index')/$metadata#docs(*)",
    "value": [
      {
        "@search.score": 1.0,
        "id": "CAA6201A1A634D6F8553599C6EECC64A",
        "profile": {
          "firstName": "CONNER",
          "middleInitial": "Z",
          "lastName": "KENT",
          "generationSuffix": "II"
        },
        "homePhoneNumber": { "phoneNumber": "9454814569" },
        "mobilePhoneNumber": { "phoneNumber": "5789656588" },
        "peronalEmail": { "personalEmailAddress": "tslatterus@eotu.org" },
        "mailingAddress": {
          "addressLine1": "599 A AVE",
          "locality": "LAKE OSWEGO",
          "stateProvinceCode": "OR",
          "postalCode": "97034",
          "countryAlpha2Code": "US"
        },
        "physicalAddress": {
          "addressLine1": "73 W MAIN ST",
          "locality": "SHELBY",
          "stateProvinceCode": "OH",
          "postalCode": "44875",
          "countryAlpha2Code": "US"
        }
      },
      {
        "@search.score": 1.0,
        "id": "338C74D2E2144AF0A59A3ADCEA8AAFDF",
        "profile": {
          "firstName": "WALTER",
          "middleInitial": "J",
          "lastName": "KOVACS",
          "generationSuffix": "II"
        },
        "homePhoneNumber": { "phoneNumber": "2818019800" },
        "mobilePhoneNumber": { "phoneNumber": "4869709642" },
        "peronalEmail": { "personalEmailAddress": "wkovacs72@usarmy.gov" },
        "mailingAddress": {
          "addressLine1": "599 A AVE",
          "locality": "LAKE OSWEGO",
          "stateProvinceCode": "OR",
          "postalCode": "97034",
          "countryAlpha2Code": "US"
        },
        "physicalAddress": {
          "addressLine1": "73 W MAIN ST",
          "locality": "SHELBY",
          "stateProvinceCode": "OH",
          "postalCode": "44875",
          "countryAlpha2Code": "US"
        }
      }
    ]
  };

  constructor(private route: ActivatedRoute) { }
  searchTerm: string = ''

  ngOnInit(): void {
    console.log(this.route.snapshot.params['term']);
    this.searchTerm = this.route.snapshot.params['term'];
    this.onSearch();
  }

    onSearch(): void {


    }

}


