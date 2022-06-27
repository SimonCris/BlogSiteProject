import { Component, OnInit } from '@angular/core';
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {BlogService} from "../../../blog/services/blog.service";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";
import {GenericDoc} from "../../../../data-model/classes/GenericDoc";

@Component({
  selector: 'app-image-consulting',
  templateUrl: './image-consulting.component.html',
  styleUrls: ['./image-consulting.component.css']
})
export class ImageConsultingComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  imageConsultingList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);


  }

  ngOnInit(): void {
    this.getImageConsultingList()
  }

  goToServicesList(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesList);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera la lista degli oggetti relativa alla consulenza d'immagine */
  getImageConsultingList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_IMAGE_CONSULTING_LIST, REQUEST_PRIORITY.HIGH);
    this.blogService.getImageConsultingList().then(resp => {
      this.imageConsultingList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_IMAGE_CONSULTING_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_IMAGE_CONSULTING_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
