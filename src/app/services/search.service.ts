import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchCriterion } from '../shared/models/search-criterion';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  // Moving further key needs to come from configuration
  apiKey: string = 'efgh5678';

  private apiUrl: any = {
    getSearch: 'searchperson/'
  };

  constructor(http: HttpClient ) { super(http); }

  getSearch(searchCriterion: SearchCriterion): Observable<any> {
//  return super.get({
      // url: environment.searchBaseURL + this.apiUrl.getSearch + searchTerm + '/' + pageNumber + '/' + '?code=' + this.apiKey, options: {
        // responseType: 'json'
        // }
      // });
    JSON.stringify(searchCriterion);
      return super.post({
        url: environment.searchBaseURL + this.apiUrl.getSearch +"?code=" + this.apiKey, params: JSON.stringify(searchCriterion), options: {
          responseType: 'json'
          }
        });


    }

}
