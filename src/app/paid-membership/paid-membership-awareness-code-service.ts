import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AwarenessCodes } from './../shared/models/awarenesscodes.model';

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
    this.awarenessCodeService.next(awCode);
  }

}