import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {
  person: any;
  additionalAddressLine: number;

  constructor(private personService: PersonService) { }

  addAddressLine(): void {
    if (this.additionalAddressLine < 2) {
      this.additionalAddressLine++;
    }
  }

  continue(): void {
    console.log(this.person);
    this.personService.createPerson(this.person).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.person = {language: null, mailingAddressStateProvinceCode: null};
    this.additionalAddressLine = 0;
  }

}
