import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../../../app-routingConstants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
  }

  public goToHome(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateHome);
    this.scrollToTopComponent.scrollToTop();
  }

}
