import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {UtilsService} from "./utils.service";
import {LoggerService} from "./logger.service";

const __appPath = '//';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(private cookieService: CookieService) { }

  save(key: string, object: any, lstorage: boolean = false) {

    let jObj = JSON.stringify(object);
    LoggerService.logInfo('PersistenceService', 'save', jObj);
    let hashObj = UtilsService.hash(jObj);
    LoggerService.logInfo('PersistenceService', 'save', 'hashObj', hashObj);

    if (!UtilsService.isVoid(sessionStorage) && !lstorage && !UtilsService.isVoid(object))
      sessionStorage.setItem(key, hashObj);
    else if (!UtilsService.isVoid(localStorage) && lstorage && !UtilsService.isVoid(object)) {
      localStorage.setItem(key, hashObj);
    } else if (!UtilsService.isVoid(this.cookieService) && !lstorage) {
      this.cookieService.set(key, hashObj, 1, __appPath);
    }

    LoggerService.logInfo('PersistenceService', 'save', '_cookieService.getByKey', this.cookieService.get(key));
    // console.log('[PersistenceService][insert] _cookieService.getByKey', this._cookieService.get(key));
  }

  remove(key: string, lstorage: boolean = false) {
    LoggerService.logWarn(this.constructor.name, 'remove', key);
    if (!UtilsService.isVoid(sessionStorage) && !lstorage)
      sessionStorage.removeItem(key);
    else if (!UtilsService.isVoid(localStorage) && lstorage)
      localStorage.removeItem(key);
    else if (!UtilsService.isVoid(this.cookieService) && !lstorage)
      this.cookieService.delete(key, __appPath);

  }

  get(key: string, lstorage: boolean = false): any {

    let obj;
    try {
      if (!UtilsService.isVoid(sessionStorage) && !lstorage
        && !UtilsService.isVoid(sessionStorage.getItem(key))) {
        obj = sessionStorage.getItem(key);
        LoggerService.logInfo('PersistenceService', 'get', 'return from sessionStorage', obj);
        // console.log('[PersistenceService][get] return from localstorage', obj);

      } else if (!UtilsService.isVoid(localStorage) && lstorage
        && !UtilsService.isVoid(localStorage.getItem(key))) {
        obj = localStorage.getItem(key);
        LoggerService.logInfo('PersistenceService', 'get', 'return from localStorage', obj);
        // console.log('[PersistenceService][get] return from _cookieService', obj);


      } else if (!UtilsService.isVoid(this.cookieService)
        && !UtilsService.isVoid(this.cookieService.get(key))) {
        obj = this.cookieService.get(key);
        LoggerService.logInfo('PersistenceService', 'get', 'return from _cookieService', obj);
        // console.log('[PersistenceService][get] return from _cookieService', obj);

      }
      obj = JSON.parse(UtilsService.unhash(obj));
      // obj = JSON.parse(obj);

    } catch (error) {
      LoggerService.logWarn('PersistenceService', 'get', error);
      //  console.warn('[PersistenceService][get]:', error);
      obj = undefined;
    }
    return obj;
  }

}
