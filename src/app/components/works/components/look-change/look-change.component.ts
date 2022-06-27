import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {GenericDoc} from "../../../../data-model/classes/GenericDoc";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {WorksService} from "../../services/works.service";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";

@Component({
  selector: 'app-look-change',
  templateUrl: './look-change.component.html',
  styleUrls: ['./look-change.component.css']
})
export class LookChangeComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  lookChangeList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private worksService: WorksService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getLookChangeList();
  }

  goToWorks(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWorks);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera i media relativi al look change */
  getLookChangeList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_LOOK_CHANGE_LIST, REQUEST_PRIORITY.HIGH);
    this.worksService.getLookChangeList().then(resp => {
      this.lookChangeList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_LOOK_CHANGE_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_LOOK_CHANGE_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
