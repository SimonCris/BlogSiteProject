import { Component, OnInit } from '@angular/core';
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {}

  /** Gestione navigazione */
  public goTo(forwardState: string) {

    switch (forwardState) {

      case AppRoutingConstants.masksState.stateBlogArticles:
        this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlogArticles);
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

    }

  }

}
