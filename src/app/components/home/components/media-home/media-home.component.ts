import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Photo} from "../../../../data-model/classes/Photo";
import {Article} from "../../../../data-model/classes/Article";

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

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getPhotosImages();
    this.getArticles();

  }

  /** Metodo che recupera la lista di foto da graficare nel Carousel */
  getPhotosImages(): void {
    this.homeService.getCarouselImages().then(resp => {
      this.imagesList = resp;
    })
      .catch(error => {
        console.log(error);
      })
  }

  /** Metodo che recupera la lista di articoli da graficare */
  getArticles(): void {
    this.homeService.getArticles().then(resp => {
      this.articlesList = resp;
    })
      .catch(error => {
        console.log(error);
      })
  }

}
