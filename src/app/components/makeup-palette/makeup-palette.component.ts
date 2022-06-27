import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../shared/components/scroll-to-top/scroll-to-top.component";
import {GenericDoc} from "../../data-model/classes/GenericDoc";
import {WorkflowRoutingService} from "../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {REQUEST_PRIORITY, RequestManagerService} from "../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../app-routingConstants";
import {RequestManagerConstants} from "../../RequestManagerConstants";
import {HttpStatusCode} from "../../AppSettings";
import {BlogService} from "../blog/services/blog.service";

@Component({
  selector: 'app-makeup-palette',
  templateUrl: './makeup-palette.component.html',
  styleUrls: ['./makeup-palette.component.css']
})
export class MakeupPaletteComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  makeUpPaletteList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getMakeUpPaletteList();
  }

  goToWorks(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWorks);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera i media relativi al make-up in palette */
  getMakeUpPaletteList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_MAKE_UP_PALETTE_LIST, REQUEST_PRIORITY.HIGH);
    this.blogService.getMakeUpPaletteList().then(resp => {
      this.makeUpPaletteList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_MAKE_UP_PALETTE_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_MAKE_UP_PALETTE_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
