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
import {Article} from "../../../../data-model/classes/Article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  articlesList: Article[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);

  }

  ngOnInit(): void {
    this.getArticles();
  }

  goToBlog(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateBlog);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera la lista di articoli */
  getArticles(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_ARTICLES, REQUEST_PRIORITY.HIGH);
    this.blogService.getArticles().then(resp => {
      this.articlesList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_ARTICLES, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_ARTICLES, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
