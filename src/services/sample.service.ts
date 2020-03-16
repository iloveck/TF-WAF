import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
  costcoApiUrl = 'http://azure.costco.com';

  // A single sample from object
  getSample(): any {
    return {name: 'Muffins', sku: '3423412341'};
  }

  // An array of samples
  getSamples(): any {
    return ['Muffins', 'Chicken', 'Batteries', 'LED TV'];
  }

  // Imaginary endpoint to get samples
  getRealSamples(id: string): Observable<any> {
    return this.http.get(`${this.costcoApiUrl}/samples`);
  }
}
