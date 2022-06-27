import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {GenericDoc} from "../../../../data-model/classes/GenericDoc";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {BlogService} from "../../../blog/services/blog.service";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";

@Component({
  selector: 'app-style-analysis',
  templateUrl: './style-analysis.component.html',
  styleUrls: ['./style-analysis.component.css']
})
export class StyleAnalysisComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  styleAnalysisList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);


  }

  ngOnInit(): void {
    this.getStyleAnalysisList()
  }

  goToServicesList(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesList);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera la lista degli oggetti relativa all'analisi dello stile */
  getStyleAnalysisList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_STYLE_ANALYSIS_LIST, REQUEST_PRIORITY.HIGH);
    this.blogService.getStyleAnalysisList().then(resp => {
      this.styleAnalysisList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_STYLE_ANALYSIS_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_STYLE_ANALYSIS_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
