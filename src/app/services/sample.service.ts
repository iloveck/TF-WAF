import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
//import { Util } from '@common/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService extends HttpService {

  private apiUrl: any = {
    getSearch: 'http://localhost:7071/api/Search/LAKE'
  };
  constructor(http: HttpClient ) { super(http);}

  // A single sample from object
  getSample(): any {
    return {name: 'Muffins', sku: '3423412341'};
  }

  getSearch(options ?: any): Observable<any> {
    //const param = this.util.merge({}, options);
    return super.get({
      url: this.apiUrl.getSearch, options: {
        responseType: 'json'
      }
      });
  }

  // An array of samples
  getSamples(): any {
    return ['Muffins', 'Chicken', 'Batteries', 'LED TV'];
  }

  /*
  // Imaginary endpoint to get samples
  getRealSamples(id: string): Observable<any> {
    return this.httpService.get('/samples', id);
  }
  */
}
