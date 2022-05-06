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

      case AppRoutingConstants.masksState.stateContacts:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateContacts);
        this.closeNav();
        break;

    }

  }

}
