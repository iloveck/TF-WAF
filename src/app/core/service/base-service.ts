import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class BaseService {

  constructor(private http: HttpClient) { }

   public async get(url: string, options?: any) :Promise<any>{
     var data = await this.http.get(url, options).toPromise();
     return data;
  }

  public async post(url: string, params: any, options?: any): Promise<any> {
    var response = await this.http.post(url, params, options).toPromise();
    return response;
  }

  public async put(url: string, params: any, options?: any): Promise<any> {
    var response = await this.http.put(url, params, options).toPromise();
    return response; 
  }

}
