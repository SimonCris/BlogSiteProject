import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {IAppDataObject} from "../../../data-model/interfaces/IAppDataObject";
import {PersistenceService} from "./persistence.service";
import {AppRoutingConstants} from "../../../app-routingConstants";
import {LoggerService} from "./logger.service";
import {AppConstants} from "../../../AppConstants";
import {UtilsService} from "./utils.service";

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  appDataObject: IAppDataObject;
  states: Map<string, string>;
  previousState: string;
  currentState: string = '';
  eventState = new Subject<any>();
  startingState: string;
  lastState: string;
  keyStore = 'BlogProjectData';
  id = Math.floor(Math.random() * 1000) + 1;
  initiated = false;

  constructor(private _persistence: PersistenceService) {

    this.appDataObject = {
      hash: this.keyStore,
      state: '',
      previousState: '',
      lossDataPrev: ''
    };

    this.appDataObject.state = this.currentState;
    this.previousState = AppRoutingConstants.path.home;
    this.currentState =  AppRoutingConstants.masksState.stateHome;
    this.lastState = '';
    this.startingState = AppRoutingConstants.masksState.stateHome;
    this.states = new Map<string, any>();
    this.populateStates();

  }

  init(): void {
    LoggerService.logInfo('WorkflowService', 'init', 'PROP [' + this.id + ']', JSON.stringify(this._persistence.get(this.keyStore, true)));
    this.initiated = true;
    if (!UtilsService.isVoid(this._persistence.get(this.keyStore, true))) {
      this.appDataObject = this._persistence.get(this.keyStore, true);
      this.currentState = (!UtilsService.isVoid(this.appDataObject)
        && !UtilsService.isVoid(this.appDataObject.state)) ? this.appDataObject.state : '';
    }

  }

  /**
   * Inizializza gli states di IAppDataObject
   * @private
   */
  public populateStates() {

    let entries = Object.keys(this.appDataObject);

    this.states.set('state', entries[2]);
    this.states.set('previousState', entries[3]);
    this.states.set(AppConstants.lossDataPrev, entries[4]);

    LoggerService.logInfo('Workflow service', 'populateStates', 'entries, _states  ', entries, this.states);

  }

}
