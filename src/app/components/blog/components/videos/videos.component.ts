import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {HttpStatusCode} from "../../../../AppSettings";
import {BlogService} from "../../services/blog.service";
import {TranslateService} from "@ngx-translate/core";
import {Video} from "../../../../data-model/classes/Video";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  videosList: Video[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  goToBlog(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlog);
    this.scrollToTopComponent.scrollToTop();
  }

  ngOnInit(): void {
    this.getVideos();
  }

  /** Metodo che recupera la lista di video da graficare */
  getVideos(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_VIDEOS, REQUEST_PRIORITY.HIGH);
    this.blogService.getVideos().then(resp => {
      this.videosList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_VIDEOS, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_VIDEOS, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
