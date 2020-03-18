import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Util } from '@common/util';
import { BaseService } from '@service/base-service';

@Injectable()
export class LogService extends BaseService {

  private apiUrl: any = {
    error: 'api/logger/clientError',
    warning: 'api/logger/clientWarning'
  };
  private defaultsParam = { message: 'none provided', url: '', lineNumber: '', columnNumber: '', stackTrace: 'none' };
  constructor(http: HttpClient, private util: Util) { super(http); }

  error(options) {
    const param = this.util.merge(this.defaultsParam, options);
    return super.post(this.apiUrl.error, param,
      {
        responseType: 'json'
      });
  }

  warning(options) {
    const param = this.util.merge(this.defaultsParam, options);
    return super.post(this.apiUrl.warning, param,
      {
        responseType: 'json'
      });
  }
}

