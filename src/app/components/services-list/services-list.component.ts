import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../app-routingConstants";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {}

  /** Gestione navigazione */
  public goTo(forwardState: string) {

    switch (forwardState) {

      case AppRoutingConstants.masksState.stateServicesListStyleAnalysis:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListStyleAnalysis);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesListShopping:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListShopping);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesListImageConsulting:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListImageConsulting);
        this.scrollToTopComponent.scrollToTop();
        break;

    }

  }

}
