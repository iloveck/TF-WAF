import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from './shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpService: HttpService) { }

  createPerson(body): Observable<any> {
    console.log(body);
    return this.httpService.post('/person', body, {});
  }
}
