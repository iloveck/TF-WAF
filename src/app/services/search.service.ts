import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { BaseService } from '@service/base-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseService {

  private apiUrl: any = {
    getSearch: 'http://localhost:7071/api/Search/'
  };
  constructor(http: HttpClient ) { super(http); }

  getSearch(searchTerm: string): Observable<any> {

    return super.get({
      url: this.apiUrl.getSearch + searchTerm, options: {
        responseType: 'json'
      }
      });
  }

}
