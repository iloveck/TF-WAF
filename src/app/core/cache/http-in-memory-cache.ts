import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCache } from '@cache/http-cache';
import { InMemoryCache } from '@cache/in-memory-cache';

@Injectable()

export class HttpInMemoryCache extends HttpCache {

  constructor(private _cacheService: InMemoryCache) {
    super();
  }

  /**
   * Returns a cached response, if any, or null if not present.
   */
    get(req: HttpRequest<any>): HttpResponse<any> | null {
        return this._cacheService.getItem(this.getCacheKeyFromRequest(req));
  }

  /**
   * Adds or updates the response in the cache.
   */
    put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
        this._cacheService.setItem(this.getCacheKeyFromRequest(req), resp);
  }

  private getCacheKeyFromRequest(req: HttpRequest<any>) {
    return req.urlWithParams;
  }
}
