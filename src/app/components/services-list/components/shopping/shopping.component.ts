import { Component, OnInit } from '@angular/core';
import {ScrollToTopComponent} from "../../../shared/components/scroll-to-top/scroll-to-top.component";
import {GenericDoc} from "../../../../data-model/classes/GenericDoc";
import {WorkflowRoutingService} from "../../../shared/services/workflow-routing.service";
import {ViewportScroller} from "@angular/common";
import {BlogService} from "../../../blog/services/blog.service";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {TranslateService} from "@ngx-translate/core";
import {AppRoutingConstants} from "../../../../app-routingConstants";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  scrollToTopComponent: ScrollToTopComponent;

  shoppingList: GenericDoc[] = [];

  constructor(private workflowRoutingService: WorkflowRoutingService,
              private scroll: ViewportScroller,
              private blogService: BlogService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) {

    this.scrollToTopComponent = new ScrollToTopComponent(this.scroll);


  }

  ngOnInit(): void {
    this.getShoppingList()
  }

  goToServicesList(): void {
    this.workflowRoutingService.goTo(AppRoutingConstants.masksState.stateServicesList);
    this.scrollToTopComponent.scrollToTop();
  }

  /** Metodo che recupera la lista degli oggetti relativa allo shopping & guardaroba */
  getShoppingList(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_SHOPPING_LIST, REQUEST_PRIORITY.HIGH);
    this.blogService.getShoppingList().then(resp => {
      this.shoppingList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_SHOPPING_LIST, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_SHOPPING_LIST, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
