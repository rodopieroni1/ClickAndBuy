import * as jQuery from 'jquery';

declare global {
  interface JQuery {
    velocity(...args: any[]): JQuery;
  }
}
