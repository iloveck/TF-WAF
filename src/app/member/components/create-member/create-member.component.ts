import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { TempData } from './tempdata';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss'],
  providers: [TempData]
})
export class CreateMemberComponent implements OnInit {
  person: any;
  additionalAddressLine: number;
  meta: any;

  constructor(private personService: PersonService, private tempData: TempData) { }

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
    this.meta = this.tempData.getData();
    this.person = {
      profile: {},
      phone: [{}, {}],
      email: [{}, {}],
      address: {},
      identity: {},
      baSameAsMa: true,
      createdByChannel: 'DESKTOP',
      createdByUser: 'U66666666',
      createdAtLocation: '110'
    };
    this.additionalAddressLine = 0;
  }

}
