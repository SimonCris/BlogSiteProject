import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export enum ECheckAndGetReturnTypes {
  string = 'string',
  number = 'number'
}
export type TCheckAndGetTypes = keyof typeof ECheckAndGetReturnTypes;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  static isVoid = function (input: any) {
    return input === 'undefined' || input === undefined || input === null || input === 'null' || input === '';
  };

  static checkAndGet(obj: any, path: string, defaultValue: any = null, type?: TCheckAndGetTypes): any {
    if (path != null) {
      const obj2Return = _.get(obj, path, defaultValue);
      if (!UtilsService.isVoid(obj2Return)) {
        switch (type) {
          case 'number':
            return +obj2Return;
          case 'string':
            return obj2Return.toString();
          default:
            return obj2Return;
        }
      } else {
        return obj2Return;
      }
    } else {
      return defaultValue;
    }
  }

}
