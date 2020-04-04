import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AwarenessCodes } from './components/awarenesscodes/awarenesscodes.model';

@Injectable()
export class AwarenessCodeService {
  
  initialAwarenessCode: AwarenessCodes = {
    awarenessCode: '',
    shortDescription: '',
    orderOfPreference: 0,
    personid: ''
  } 
  private awarenessCodeService = new BehaviorSubject<AwarenessCodes>(this.initialAwarenessCode);
  awarenessCodeSelected = this.awarenessCodeService.asObservable();
  
  constructor() {   }

  changeAwarenessCode(awCode: AwarenessCodes) {
    console.log("I am in change awareness code service");
    this.awarenessCodeService.next(awCode);
    console.log("New awareness code is "+ awCode);
  }

}