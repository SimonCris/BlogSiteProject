import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  /**
   * @param callbackLog
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare informazioni di differente tipo di log a seconda della callbackLog passata
   */
  static logData(callbackLog: any, className: string, methodName: string, ...args: any[]): void {
    // Internet Explorer 6-11
    let isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);
    let debbuger: any = '__BROWSERTOOLS_DOMEXPLORER_ADDED';
    let debbuger_10: any = '__IE_DEVTOOLBAR_CONSOLE_COMMAND_LINE';
    if (isIE && !window[debbuger]) callbackLog = function () {};
    if (environment.loggerServiceActive) {
      let message: string = `[Classe: ` + className + `] - [Metodo: ` + methodName + `]`;
      message += !args ? ` - Dato loggato: ` : ``;
      if(environment.loggerServiceActive && !window[debbuger_10]) {
        callbackLog(message, ...args);
      } else if (environment.loggerServiceActive && window[debbuger_10]){
        console.log(message, ...args)
      }
    }
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log INFO
   */
  static logInfo(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.info;
    LoggerService.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log DEBUG
   */
  static logDebug(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.debug;
    LoggerService.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log WARN
   */
  static logWarn(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.warn;
    LoggerService.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log ERROR
   */
  static logError(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.error;
    LoggerService.logData(callbackLog, className, methodName, args);
  }

}
