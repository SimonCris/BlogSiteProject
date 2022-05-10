import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-about-me-home',
  templateUrl: './about-me-home.component.html',
  styleUrls: ['./about-me-home.component.css']
})
export class AboutMeHomeComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
  }

  public goToAboutMe(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateTellAboutMe);
    this.scrollToTopComponent.scrollToTop();
  }

}
