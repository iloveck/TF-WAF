import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { TempData } from './tempdata';
import { Person } from 'src/app/shared/models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss'],
  providers: [TempData],
})
export class CreateMemberComponent implements OnInit {
  person = new Person(
    {
      firstName: '',
      middleInitial: '',
      lastName: '',
      birthdate: '',
      languageCode: '',
      generationSuffix: '',
    },
    [
      { phoneNumber: '', phoneTypeCode: '' },
      { phoneNumber: '', phoneTypeCode: '' },
    ],
    [
      { emailAddress: '', emailTypeCode: '' },
      { emailAddress: '', emailTypeCode: '' },
    ],
    [
      {
        line1: '',
        line2: '',
        line3: '',
        city: '',
        stateProvinceCode: '',
        postalCode: '',
        countryCode: '',
      },
    ],
    [{ idNumber: '', idTypeCode: '', stateProvinceCode: '', countryCode: '' }],
    true,
    'Desktop',
    'u5666',
    '110'
  );
  additionalAddressLine: number;
  meta: any;

  constructor(
    private router: Router,
    private personService: PersonService,
    private tempData: TempData
  ) {
    document.body.style.overflowY = 'inherit';
  }

  addAddressLine(): void {
    if (this.additionalAddressLine < 2) {
      this.additionalAddressLine++;
    }
  }

  continue(): void {
    this.personService.createPerson(this.person).subscribe((result) => {
      this.router.navigate(['/paid-membership/hearabout', result.id]);
    });
  }

  ngOnInit(): void {
    this.meta = this.tempData.getData();
    this.additionalAddressLine = 0;
  }
}
