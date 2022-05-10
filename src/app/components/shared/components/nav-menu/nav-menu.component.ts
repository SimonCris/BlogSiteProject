import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {WorkflowRoutingService} from "../../services/workflow-routing.service";
declare var $: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  /** Identifica se il sidebar è aperto o chiuso */
  isSidebarOpen = false;

  constructor(private workflowRoutingService: WorkflowRoutingService) { }

  ngOnInit(): void {

    $(document).ready(function () {
      var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
      });
    });

  }


  /** Metodo che chiude il navbar */
  public closeNav() {

    let overlay = $('.overlay');
    let trigger = $('.hamburger');
    overlay.hide();
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    $('#wrapper').toggleClass('toggled');

  }

  /** Gestione navigazione */
  public goTo(forwardState: string) {

    switch (forwardState) {

      case AppRoutingConstants.masksState.stateHome:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateHome);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateWhoIAm:
        this.closeNav();
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWhoIAm);
        break;

      case AppRoutingConstants.masksState.stateTellAboutMe:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateTellAboutMe);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateArmocromia:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateArmocromia);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateWedding:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateWedding);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateLookChange:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateLookChange);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateFaceShapes:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateFaceShapes);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateBodyShapes:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBodyShapes);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateMakeUpInPalette:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateMakeUpInPalette);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateBlogArticles:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogArticles);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateBlogVideos:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogVideos);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateBlogPhotos:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogPhotos);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateQualifications:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateQualifications);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateServicesList:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesList);
        this.closeNav();
        break;

      case AppRoutingConstants.masksState.stateContacts:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateContacts);
        this.closeNav();
        break;

    }

  }

}
