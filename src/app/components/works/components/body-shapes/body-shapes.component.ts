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
  selector: 'app-body-shapes',
  templateUrl: './body-shapes.component.html',
  styleUrls: ['./body-shapes.component.css']
})
export class BodyShapesComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  bodyShapesList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private worksService: WorksService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getBodyShapesList();
  }

  goToWorks(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWorks);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera i media relativi al body shapes */
  getBodyShapesList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_WORKS_BODY_SHAPES_LIST, REQUEST_PRIORITY.HIGH);
    this.worksService.getBodyShapesList().then(resp => {
      this.bodyShapesList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_WORKS_BODY_SHAPES_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_WORKS_BODY_SHAPES_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
