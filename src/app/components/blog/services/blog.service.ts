import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Photo, PhotoFactory} from "../../../data-model/classes/Photo";
import {environment} from "../../../../environments/environment";
import {db} from "../../../../main";
import { query, where, orderBy, limit } from "firebase/firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {Video, VideoFactory} from "../../../data-model/classes/Video";
import {Article, ArticleFactory} from "../../../data-model/classes/Article";
import {GenericDoc, GenericDocFactory} from "../../../data-model/classes/GenericDoc";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private afStorage: AngularFireStorage) { }

  /** Servizio che recupera le 3 foto più 'nuove' inserite nel blog **/
  public async getPhotos(): Promise<Photo[]> {

    let photoList: Photo[] = [];
    // const getImagesQuery = query(collection(db, "/blog/media/immagini"), where("population", ">", 100000), orderBy("population"), limit(2));
    const getImagesQuery = query(collection(db, environment.endpoint.blog.immagini));
    const querySnapshot = await getDocs(getImagesQuery);
    querySnapshot.forEach((doc) => {
      let photo = PhotoFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      photo.imagePathFromStorage = this.afStorage.ref(photo.imagePath).getDownloadURL();
      photoList.push(photo);
    });
    return photoList;

  }

  /** Servizio che recupera i video inseriti nella sezione blog **/
  public async getVideos(): Promise<Video[]> {

    let videoList: Video[] = [];
    const getVideosQuery = query(collection(db, environment.endpoint.blog.video));
    const querySnapshot = await getDocs(getVideosQuery);
    querySnapshot.forEach((doc) => {
      let video = VideoFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      video.videoPathFromStorage = this.afStorage.ref(video.videoPath).getDownloadURL();
      videoList.push(video);
    });
    return videoList;

  }

  /** Servizio che recupera gli articoli inseriti nella sezione blog **/
  public async getArticles(): Promise<Article[]> {

    let articlesList: Article[] = [];
    const getArticlesQuery = query(collection(db, environment.endpoint.blog.articoli));
    const querySnapshot = await getDocs(getArticlesQuery);
    querySnapshot.forEach((doc) => {
      let article = ArticleFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      article.imagePathFromStorage = this.afStorage.ref(article.imagePath).getDownloadURL();
      articlesList.push(article);
    });
    return articlesList;

  }

  /** Servizio che recupera i media inseriti nella sezione Consulenza d'Immagine **/
  public async getImageConsultingList(): Promise<GenericDoc[]> {

    let imageConsultingList: GenericDoc[] = [];
    const getimageConsultingListQuery = query(collection(db, environment.endpoint.media.consulenzaImmagine));
    const querySnapshot = await getDocs(getimageConsultingListQuery);
    querySnapshot.forEach((doc) => {
      let imageConsultingFile = GenericDocFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      imageConsultingFile.mediaPathFromStorage = this.afStorage.ref(imageConsultingFile.mediaPath).getDownloadURL();
      imageConsultingList.push(imageConsultingFile);
    });
    return imageConsultingList;

  }

  /** Servizio che recupera i media inseriti nella sezione Analisi dello stile **/
  public async getStyleAnalysisList(): Promise<GenericDoc[]> {

    let styleAnalysisList: GenericDoc[] = [];
    const getstyleAnalysisConsultingListQuery = query(collection(db, environment.endpoint.media.analisiStile));
    const querySnapshot = await getDocs(getstyleAnalysisConsultingListQuery);
    querySnapshot.forEach((doc) => {
      let styleAnalysisFile = GenericDocFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      styleAnalysisFile.mediaPathFromStorage = this.afStorage.ref(styleAnalysisFile.mediaPath).getDownloadURL();
      styleAnalysisList.push(styleAnalysisFile);
    });
    return styleAnalysisList;

  }

  /** Servizio che recupera i media inseriti nella sezione Shopping & Guardaroba **/
  public async getShoppingList(): Promise<GenericDoc[]> {

    let shoppingList: GenericDoc[] = [];
    const shoppingListQuery = query(collection(db, environment.endpoint.media.shoppingEGuardaroba));
    const querySnapshot = await getDocs(shoppingListQuery);
    querySnapshot.forEach((doc) => {
      let shoppingListFile = GenericDocFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      shoppingListFile.mediaPathFromStorage = this.afStorage.ref(shoppingListFile.mediaPath).getDownloadURL();
      shoppingList.push(shoppingListFile);
    });
    return shoppingList;

  }

}
