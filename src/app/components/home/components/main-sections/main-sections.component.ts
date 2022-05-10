import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-main-sections',
  templateUrl: './main-sections.component.html',
  styleUrls: ['./main-sections.component.scss']
})
export class MainSectionsComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
  }

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

      case AppRoutingConstants.masksState.stateMakeUpInPalette:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateMakeUpInPalette);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBlogArticles:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogArticles);
        this.scrollToTopComponent.scrollToTop();
        break;

      default:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateHome);
        this.scrollToTopComponent.scrollToTop();
        break;

    }

  }

}
