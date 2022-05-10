import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../../../app-routingConstants";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
  }

  goToBlog(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlog);
    this.scrollToTopComponent.scrollToTop();
  }

}
