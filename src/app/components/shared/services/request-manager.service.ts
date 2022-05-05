import { Injectable } from '@angular/core';
import {IServiceRequest} from "../../../data-model/interfaces/IServiceRequest";
import {NgxSpinnerService} from "ngx-spinner";
import {TranslateService} from "@ngx-translate/core";
import {ToastrService} from "ngx-toastr";
import {UtilsService} from "./utils.service";
import {AppSettings, HttpStatusCode} from "../../../AppSettings";
import {AppConstants} from "../../../AppConstants";

/**
 *
 * @clazz {number}
 * @private
 *
 * Soglia per priorità HIGH
 */
const __highTrashold = 10;

/**
 *
 * @clazz {number}
 * @private
 *
 * Soglia per priorità LOW
 */
const __mediumTrashold = 5;

/**
 *
 * @clazz {number}
 * @private
 *
 * Soglia per priorità LOW
 */
const __lowTrashold = 1;

/** Priorità delle richieste del RequestManager */
export enum REQUEST_PRIORITY {
  HIGH = 'HIGH',
  NORMAL = 'NORMAL',
  LOW = 'LOW'
}

@Injectable({
  providedIn: 'root'
})
export class RequestManagerService {

  /** Coda chiamate Servizi non ancora concluse */
  private _workingQueue: IServiceRequest[] = [];

  /** Coda chiamate Servizi concluse */
  private _endedQueue: IServiceRequest[] = [];

  constructor(private _spinner: NgxSpinnerService,
              private _notifierService: ToastrService,
              private _translate: TranslateService) { }

  /**
   *
   *
   * Il metodo aggiunge una nuova chiamata nella coda.
   * @param requestTag
   * @param priority
   */
  pushNewRequest(requestTag: string, priority: string): void {
    if (this._workingQueue.length === 0) this._spinner.show();

    let pr = this.getPriorityFromString(priority, this._workingQueue);
    let request: IServiceRequest = {requestTag: requestTag, result: -1, priority: pr, beMessage: ''};

    let index = this.getIndexOfPriority(request.priority, this._workingQueue);

    // console.log('RequestManagerService', 'pushNewRequest', 'ADDED REQUEST: ', request);

    this._workingQueue.splice(index, 0, request);
  }


  /**
   *
   * @param {string} requestTag
   *
   * Metodo che rimuove una richiesta dalla coda di quelle attive e la inserisce in quella delle richieste evase.
   *
   * @param result
   * @param beMessage
   * @param category
   */
  handleRequest(requestTag: string, result: number, beMessage?: string, category?: string): void {

    let index = this.getIndexByTag(requestTag, this._workingQueue);

    let requestHandled: IServiceRequest = this._workingQueue.splice(index, 1)[0];

    requestHandled.result = result;
    requestHandled.beMessage = !!beMessage ? beMessage : '';

    index = this.getIndexOfPriority(requestHandled.priority, this._endedQueue);

    this._endedQueue.splice(index, 0, requestHandled);
    // console.log('RequestManagerService', 'handleRequest', 'workingQueue', this._workingQueue, 'HANDED REQUEST: ', requestHandled);

    if (this._workingQueue.length === 0) {
      this.publishErrorMessage(!!beMessage ? beMessage : '');
    }

  }

  /**
   *
   * @param {string} priority
   * @param queue
   * @returns {number}
   *
   * Il metodo espone un valore numerico per la priorità in funzione di una descrizione qualitativa ["LOW","MEDIUM","HIGH"] passata in input come stringa.
   * Il alore viene calcolato in funzione delle chiamate gia presenti nella coda.
   */
  private getPriorityFromString(priority: string, queue: IServiceRequest[]): number {
    let numericalPriority;
    let maxPriority = queue.length > 0
      ? queue[0].priority
      : __highTrashold;

    let minPriority = queue.length > 0
      ? queue[queue.length - 1].priority
      : __lowTrashold;

    switch (priority) {
      case REQUEST_PRIORITY.HIGH : {
        return Math.max(__highTrashold, maxPriority + 1);
      }

      case REQUEST_PRIORITY.NORMAL: {
        return Math.max(__mediumTrashold, this.avaragePriority(queue));
      }
      case REQUEST_PRIORITY.LOW: {
        return Math.max(__lowTrashold, minPriority - 1);
      }
      default: {
        return __lowTrashold;
      }
    }
  }

  /**
   *
   * @param {IServiceRequest[]} queue
   * @returns {number}
   *
   * Metodo che restituisce la priorità media delle chiamate presenti una coda. Restituisce sempre un itnero.
   *
   */
  private avaragePriority(queue: IServiceRequest[]): number {
    let average = 0;
    for (let elem of queue) {
      average += elem.priority;
    }
    return Math.ceil(average / queue.length);
  }

  /**
   * Metodo che comunica al servizio di notifca la lista dei messaggi sugli errori;
   */
  private publishErrorMessage(message: string): void {

    let errorMessageList = [];
    let successMessageList = [];

    // LoggerService.logInfo('RequestManagerService', 'publishSuccessMessage', 'NotificationMessage ', this._endedQueue);

    for (let response of this._endedQueue) {
      if (response.result >= AppSettings.HTTP_KO) {
        errorMessageList.push(message);
        // LoggerService.logInfo('RequestManagerService', 'publishErrorMessage', 'NotificationMessage ', message);

      } else if (response.result == HttpStatusCode.OK) {
        successMessageList.push(message);
        // LoggerService.logInfo('RequestManagerService', 'publishSuccessMessage', 'NotificationMessage ', message);

      } else {
        // LoggerService.logInfo('RequestManagerService', 'publishErrorMessage', 'NotificationMessage response ', response);
      }
    }

    this._endedQueue = [];

    if (errorMessageList.length > 0 && !UtilsService.isVoid(message)) {
      this._notifierService.error(message, AppConstants.ERROR_NOTIFICATION);
    } else if (successMessageList.length > 0 && !UtilsService.isVoid(message)) {
      this._notifierService.success(message, AppConstants.SUCCESS_NOTIFICATION);
    }

    this._spinner.hide();
  }

  /**
   *
   * @param {string} tag
   * @param {IServiceRequest[]} queue
   * @returns {number}
   *
   * Questo metodo ritorna il primo indice di posizione al interno della queue (passata come argomento) con una data tag
   */
  private getIndexByTag(tag: string, queue: IServiceRequest[]): number {
    let index = 0;

    for (let r of queue) {
      if (tag === r.requestTag) break;
      index++;
    }

    return index;
  }

  /**
   *
   * @param {number} priority
   * @param {IServiceRequest[]} queue
   * @returns {number}
   *
   * Questo metodo ritorna l'ultimo indice di posizione al interno della queue (passata come argomento) con una data priorità
   */
  private getIndexOfPriority(priority: number, queue: IServiceRequest[]): number {
    let index = 0;

    for (let r of queue) {
      if (priority > r.priority) break;
      index++;
    }

    return index;

  }

}
