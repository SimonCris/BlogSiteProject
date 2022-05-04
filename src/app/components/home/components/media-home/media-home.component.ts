import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Photo} from "../../../../data-model/classes/Photo";

@Component({
  selector: 'app-media-home',
  templateUrl: './media-home.component.html',
  styleUrls: ['./media-home.component.scss']
})
export class MediaHomeComponent implements OnInit {

  /** Lista delle foto graficate nel carousel (3 elementi nella lista) */
  imagesList: Photo[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getPhotosImages();
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

}
