import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Util } from '@common/util';
import { HttpService } from '@service/http.service';

@Injectable()
export class LogService extends HttpService {

  private apiUrl: any = {
    error: '',
    warning: ''
  };
  private defaultsParam = { message: 'none provided', url: '', lineNumber: '', columnNumber: '', stackTrace: 'none' };
  constructor(http: HttpClient, private util: Util) { super(http); }

  error(options: any) {
    const param = this.util.merge(this.defaultsParam, options);
    return super.post({
      url: this.apiUrl.error, params: param, options: {
        responseType: 'json'
      }
      });
  }

  warning(options: any) {
    const param = this.util.merge(this.defaultsParam, options);
    return super.post({
      url: this.apiUrl.warning, params: param, options: {
        responseType: 'json'
      }
      });
  }
}

