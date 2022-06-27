import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../../../app-routingConstants";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {}

  /** Gestione navigazione */
  public goTo(forwardState: string) {

    switch (forwardState) {

      case AppRoutingConstants.masksState.stateArmocromia:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateArmocromia);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateWedding:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWedding);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateLookChange:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateLookChange);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateFaceShapes:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateFaceShapes);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBodyShapes:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBodyShapes);
        this.scrollToTopComponent.scrollToTop();
        break;

    }

  }

}
