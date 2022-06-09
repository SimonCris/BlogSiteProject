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

      /** GO TO ARMOCROMIA */
      case AppRoutingConstants.masksState.stateArmocromia:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateArmocromia)]);
        break;

      /** GO TO WEDDING */
      case AppRoutingConstants.masksState.stateWedding:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWedding)]);
        break;

      /** GO TO CAMBIO LOOK */
      case AppRoutingConstants.masksState.stateLookChange:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateLookChange)]);
        break;

      /** GO TO FORME VISO */
      case AppRoutingConstants.masksState.stateFaceShapes:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateFaceShapes)]);
        break;

      /** GO TO FORME CORPO */
      case AppRoutingConstants.masksState.stateBodyShapes:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBodyShapes)]);
        break;

      /** GO TO MAKEUP IN PALETTE */
      case AppRoutingConstants.masksState.stateMakeUpInPalette:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateMakeUpInPalette)]);
        break;

      /** GO TO BLOG */
      case AppRoutingConstants.masksState.stateBlog:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlog)]);
        break;

      /** GO TO BLOG ARTICOLI */
      case AppRoutingConstants.masksState.stateBlogArticles:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogArticles)]);
        break;

      /** GO TO BLOG FOTO */
      case AppRoutingConstants.masksState.stateBlogPhotos:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogPhotos)]);
        break;

      /** GO TO BLOG VIDEO */
      case AppRoutingConstants.masksState.stateBlogVideos:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogVideos)]);
        break;

      /** GO TO QUALIFICHE */
      case AppRoutingConstants.masksState.stateQualifications:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateQualifications)]);
        break;

      /** GO TO LISTA SERVIZI */
      case AppRoutingConstants.masksState.stateServicesList:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesList)]);
        break;

      /** GO TO LISTA SERVIZI CONSULENZA IMMAGINE */
      case AppRoutingConstants.masksState.stateServicesListImageConsulting:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListImageConsulting)]);
        break;

      /** GO TO LISTA SERVIZI SHOPPING */
      case AppRoutingConstants.masksState.stateServicesListShopping:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListShopping)]);
        break;

      /** GO TO LISTA SERVIZI */
      case AppRoutingConstants.masksState.stateServicesListStyleAnalysis:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListStyleAnalysis)]);
        break;

      /** GO TO CONTATTI */
      case AppRoutingConstants.masksState.stateContacts:
        this.routerService.navigate([AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateContacts)]);
        break;

    }

  }

}
