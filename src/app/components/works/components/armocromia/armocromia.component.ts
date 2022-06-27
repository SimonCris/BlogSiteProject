import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {Photo} from "../../../../data-model/classes/Photo";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";
import {WorksService} from "../../services/works.service";
import {GenericDoc} from "../../../../data-model/classes/GenericDoc";

@Component({
  selector: 'app-armocromia',
  templateUrl: './armocromia.component.html',
  styleUrls: ['./armocromia.component.css']
})
export class ArmocromiaComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  armocromiaList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private worksService: WorksService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getArmocromiaList();
  }

  goToWorks(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWorks);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera i media relativi all'armocromia */
  getArmocromiaList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_WORKS_ARMOCROMIA_LIST, REQUEST_PRIORITY.HIGH);
    this.worksService.getArmocromiaList().then(resp => {
      this.armocromiaList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_WORKS_ARMOCROMIA_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_WORKS_ARMOCROMIA_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
