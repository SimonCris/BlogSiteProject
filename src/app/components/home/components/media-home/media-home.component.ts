import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Photo} from "../../../../data-model/classes/Photo";
import {Article} from "../../../../data-model/classes/Article";
import {REQUEST_PRIORITY, RequestManagerService} from "../../../shared/services/request-manager.service";
import {RequestManagerConstants} from "../../../../RequestManagerConstants";
import {HttpStatusCode} from "../../../../AppSettings";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-media-home',
  templateUrl: './media-home.component.html',
  styleUrls: ['./media-home.component.scss']
})
export class MediaHomeComponent implements OnInit {

  /** Lista delle foto graficate nel carousel (3 elementi nella lista) */
  imagesList: Photo[] = [];

  /** Lista degli articoli graficati (3 elementi nella lista) */
  articlesList: Article[] = [];

  constructor(private homeService: HomeService,
              private requestManagerService: RequestManagerService,
              private translateService: TranslateService) { }

  ngOnInit(): void {
    this.getPhotosImages();
    this.getArticles();

  }

  /** Metodo che recupera la lista di foto da graficare nel Carousel */
  getPhotosImages(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, REQUEST_PRIORITY.HIGH);
    this.homeService.getCarouselImages().then(resp => {
      this.imagesList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_PHOTOS_IMAGES, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

  /** Metodo che recupera la lista di articoli da graficare */
  getArticles(): void {
    this.requestManagerService.pushNewRequest(RequestManagerConstants.GET_HOME_ARTICLES, REQUEST_PRIORITY.HIGH);
    this.homeService.getArticles().then(resp => {
      this.articlesList = resp;
      this.requestManagerService.handleRequest(RequestManagerConstants.GET_HOME_ARTICLES, HttpStatusCode.OK);
    })
      .catch(error => {
        this.requestManagerService.handleRequest(RequestManagerConstants.GET_HOME_ARTICLES, error.code, this.translateService.instant("GENERIC_ERROR"));
      })
  }

}
