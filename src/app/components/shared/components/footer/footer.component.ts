import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {WorkflowRoutingService} from "../../services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {ScrollToTopComponent} from "../scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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

      case AppRoutingConstants.masksState.stateHome:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateHome);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateWhoIAm:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWhoIAm);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateTellAboutMe:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateTellAboutMe);
        this.scrollToTopComponent.scrollToTop();
        break;

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

      case AppRoutingConstants.masksState.stateMakeUpInPalette:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateMakeUpInPalette);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBlogArticles:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogArticles);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBlog:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlog);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBlogVideos:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogVideos);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateBlogPhotos:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogPhotos);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateQualifications:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateQualifications);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesList:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesList);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesListImageConsulting:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListImageConsulting);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesListShopping:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListShopping);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateServicesListStyleAnalysis:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesListStyleAnalysis);
        this.scrollToTopComponent.scrollToTop();
        break;

      case AppRoutingConstants.masksState.stateContacts:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateContacts);
        this.scrollToTopComponent.scrollToTop();
        break;

    }

  }

}
