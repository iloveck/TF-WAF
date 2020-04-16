import { Component, OnInit, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { TempData } from './tempdata';
import { Person } from 'src/app/shared/models/person.model';
import { LookupsService } from 'src/app/services/lookups.service';
import { Router, ActivatedRoute } from '@angular/router';

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
      languageCode: 'EN',
      generationSuffix: '',
    },
    [
      { phoneNumber: '', phoneTypeCode: 'MOBILEPHONE' },
      { phoneNumber: '', phoneTypeCode: '' },
    ],
    [
      { emailAddress: '', emailTypeCode: 'PERSONALEMAIL' },
      { emailAddress: '', emailTypeCode: '' },
    ],
    [
      {
        line1: '',
        line2: '',
        line3: '',
        city: '',
        stateProvinceCode: 'WA',
        postalCode: '',
        countryCode: 'US',
      },
    ],
    [{ idNumber: '', idTypeCode: '', stateProvinceCode: 'WA', countryCode: 'US' }],
    true,
    'Desktop',
    'u5666',
    '110',
    ''
  );
  additionalAddressLine: number;
  meta: any;
  provinces: [];
  currentLanguage = 'en_US';
  memberId: string;
  title = 'Member Information';

  constructor(
    private router: Router,
    private personService: PersonService,
    private tempData: TempData,
    private lookups: LookupsService,
    private route: ActivatedRoute,
  ) {
    document.body.style.overflowY = 'inherit';
  }

  addAddressLine(): void {
    if (this.additionalAddressLine < 2) {
      this.additionalAddressLine++;
    }
  }

  getProvinces(countryCode): void {
    this.meta.countries.forEach(element => {
      if (element.alpha2Code === countryCode) {
        this.provinces = element.states[this.currentLanguage];
        if (element.alpha2Code !== 'US') {
          this.person.address[0].stateProvinceCode = null;
        }
      }
    });
  }

  private stripPhone(phone): string {
    return phone.replace(/[^a-zA-Z0-9]/g, '');
  }

  continue(): void {
    if (this.memberId) {
      delete this.person.address;
      this.person.phone[0].phoneNumber = this.stripPhone(this.person.phone[0].phoneNumber);
      this.person.phone[1].phoneNumber = this.stripPhone(this.person.phone[1].phoneNumber);
      this.person.primaryMemberId = this.memberId;

      this.personService.createHouseholdPerson(this.person).subscribe((result) => {
        this.router.navigate(['/paid-membership/hearabout', result.id]);
      });

    } else {
      this.person.phone[0].phoneNumber = this.stripPhone(this.person.phone[0].phoneNumber);
      this.person.phone[1].phoneNumber = this.stripPhone(this.person.phone[1].phoneNumber);
      delete this.person.primaryMemberId;

      this.personService.createPerson(this.person).subscribe((result) => {
        this.router.navigate(['/paid-membership/hearabout', result.id]);
      });
    }
  }

  ngOnInit(): void {
    this.lookups.get().subscribe((res) => {
      this.meta = res;
      this.getProvinces(this.person.address[0].countryCode);
    });
    // for local data if needed this.meta = this.tempData.getData();
    this.additionalAddressLine = 0;

    this.route.params.subscribe(params => {
      this.memberId = params.id;
      if (params.id) {
        this.title = 'Free Household Membership';
      }
   });
  }
}
