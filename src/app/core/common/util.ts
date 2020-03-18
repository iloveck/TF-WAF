import { Injectable } from '@angular/core';
import { bind, chain, each, filter, find, groupBy, last, merge, sortBy, pull, takeRight, reverse, take, indexOf } from 'lodash-es';

@Injectable()
export class Util {
  public sort = sortBy;
  public each = each;
  public filter = filter;
  public groupBy = groupBy;
  public find = find;
  public contextBind = bind;
  public merge = merge;
  public last = last;
  public chain = chain;
  public pull = pull;
  public takeRight = takeRight;
  public reverse = reverse;
  public take = take;
  public indexOf = indexOf;
}
