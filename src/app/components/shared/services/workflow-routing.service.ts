import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {WorkflowService} from "./workflow.service";
import {AppRoutingConstants} from "../../../app-routingConstants";
import {UtilsService} from "./utils.service";

@Injectable({
  providedIn: 'root'
})
export class WorkflowRoutingService {

  constructor(private routerService: Router,
              private workFlowService: WorkflowService) {}

  /**
   * Metodo che gestisce il routing fra le varie sezioni dell'applicativo e set
   * degli stati corrente e precedente con salvataggio in persistenza
   * */
  public goToNextState(objToSave: any, previousState: string, nextState: string) {

    /**switch (nextState) {
      /** GO TO DETTAGLI OBIETTIVO */
      /**case AppRoutingConstants.masksState.stateTargetDetail:
        if (!UtilsService.isVoid(objToSave)) this.workFlowService.save(nextState, objToSave);
        this.workFlowService.previousState = previousState;
        this.workFlowService.updateStatus(nextState);
        this.routerService.navigate([AppRoutingConstants.fullPath('target_detail')]);
        break;*/

      /** GO TO DETTAGLI DOSSIER */
     /** case AppRoutingConstants.masksState.stateDossierDetail:
        if (!UtilsService.isVoid(objToSave)) this.workFlowService.save(nextState, objToSave);
        this.workFlowService.previousState = previousState;
        this.workFlowService.updateStatus(nextState);
        this.routerService.navigate([AppRoutingConstants.fullPath('dossier_detail')]);
        break;

      /** GO TO DETTAGLI DOCUMENTI */
      /**case AppRoutingConstants.masksState.stateDocumentsDetail:
        if (!UtilsService.isVoid(objToSave)) this.workFlowService.save(nextState, objToSave);
        this.workFlowService.previousState = previousState;
        this.workFlowService.updateStatus(nextState);
        this.routerService.navigate([AppRoutingConstants.fullPath('documents_detail')]);
        break;

      /** GO TO DOCUMENTI */
      /**case AppRoutingConstants.masksState.stateDocuments:
        if (!UtilsService.isVoid(objToSave)) this.workFlowService.save(nextState, objToSave);
        this.workFlowService.previousState = previousState;
        this.workFlowService.updateStatus(nextState);
        this.routerService.navigate([AppRoutingConstants.fullPath('documents')]);
        break;

    } */


  }

  /**
   * Metodo che gestisce il routing verso una sezione specifica dell'applicativo
   * senza salvataggio in persistenza e gestione degli stati precedenti e successivi
   * */
  public goTo(nextState: string) {

    switch (nextState) {

      /** GO TO HOME */
      case AppRoutingConstants.masksState.stateHome:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome)]);
        break;

      /** GO TO CHI SONO */
      case AppRoutingConstants.masksState.stateWhoIAm:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWhoIAm)]);
        break;

      /** GO TO DICONO DI ME */
      case AppRoutingConstants.masksState.stateTellAboutMe:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateTellAboutMe)]);
        break;

    }

  }

}
