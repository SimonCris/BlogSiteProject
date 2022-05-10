import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-qualification-home',
  templateUrl: './qualification-home.component.html',
  styleUrls: ['./qualification-home.component.css']
})
export class QualificationHomeComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
  }

  public goToQualifications(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateTellAboutMe);
    this.scrollToTopComponent.scrollToTop();
  }

}
