import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  private apiUrl: any = {
    //getSearch: 'http://localhost:7071/api/v1/searchperson/'
    getSearch: 'https://mglo-search-api-dev.azurewebsites.net/api/v1/searchperson/'
  };
  constructor(http: HttpClient ) { super(http); }

  getSearch(searchTerm: string): Observable<any> {

    return super.get({
      url: this.apiUrl.getSearch + searchTerm + "?code=efgh5678", options: {
        responseType: 'json'
        }
      });
  }

}
