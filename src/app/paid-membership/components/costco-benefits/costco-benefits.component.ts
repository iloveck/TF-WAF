import { Component, OnInit, Input } from '@angular/core';
import { AwarenesscodesComponent } from '../awarenesscodes/awarenesscodes.component';
import {AwarenessCodeService} from '../../paid-membership-awareness-code-service';
import { AwarenessCodes } from '../awarenesscodes/awarenesscodes.model';
import {MembershipAccount} from './costco-benefits.create.membership.model'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';

declare function require(path: string);
@Component({
  selector: 'app-costco-benefits',
  templateUrl: './costco-benefits.component.html',
  styleUrls: ['./costco-benefits.component.scss']
})
export class CostcoBenefitsComponent implements OnInit {
  imageSrc = require('src/assets/images/Costco Benefits.svg');
  constructor(private awUpdate: AwarenessCodeService, private httpClient: HttpClient, private router: Router) { }
  //TO DO: Confirm with Adam on what parameters to be passed and substitute Awarenesscodes and id from params
  createAccountModel: MembershipAccount = {
    offeringId: 'c95103bbbb004db18014036f27e18914',
    awarenessCode: '',
    accountTypeCode: 'GOLDSTAR',
    signupLocation: '110',
    createdByChannel: 'WAREHOUSE',
    createdByUser: 'U100000',
    primaryPersonId: '1000006945',
    householdPersonId: '1000006945'
  };
  awarenessSelection: AwarenessCodes;
  ngOnInit(): void {
    
    this.awUpdate.awarenessCodeSelected.subscribe(awarenessSelection =>{ 
      this.awarenessSelection = awarenessSelection;
    })
   
  }
  createAccount(){
    this.createAccountModel.awarenessCode = this.awarenessSelection.awarenessCode;

    var createMembershipUrl = environment.createMembershipUrl;
    this.httpClient.post(createMembershipUrl, this.createAccountModel, {observe: 'response'}).subscribe(resp => {
      if(resp.status == 200)
       { 
         this.router.navigate(['../paid-membership/completeprofile']);// TODO: Navigate based on result of request
       }
    });
  }

}
