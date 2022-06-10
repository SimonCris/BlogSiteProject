import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {BlogService} from "../../services/blog.service";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";
import {TranslateService} from "@ngx-translate/core";
import {Photo} from "../../../../data-model/classes/Photo";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  imagesList: Photo[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getPhotosImages();
  }

  goToBlog(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlog);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera la lista di foto da graficare nel Carousel */
  getPhotosImages(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, REQUEST_PRIORITY.HIGH);
    this.blogService.getPhotos().then(resp => {
      this.imagesList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
