import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from "../../../../main";
import {Photo, PhotoFactory} from "../../../data-model/classes/Photo";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import { query, where, orderBy, limit } from "firebase/firestore";
import {environment} from "../../../../environments/environment";
import {Article, ArticleFactory} from "../../../data-model/classes/Article";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private afStorage: AngularFireStorage) { }

  public async addUserTest(): Promise<void> {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  /** Servizio che recupera le 3 foto più 'nuove' inserite nel blog **/
  public async getCarouselImages(): Promise<Photo[]> {

    let photoList: Photo[] = [];
    // const getImagesQuery = query(collection(db, "/blog/media/immagini"), where("population", ">", 100000), orderBy("population"), limit(2));
    const getImagesQuery = query(collection(db, environment.endpoint.blog.immagini), limit(3));
    const querySnapshot = await getDocs(getImagesQuery);
    querySnapshot.forEach((doc) => {
      let photo = PhotoFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      photo.imagePathFromStorage = this.afStorage.ref(photo.imagePath).getDownloadURL();
      photoList.push(photo);
    });
    return photoList;

  }

  /** Servizio che recupera i 3 articoli presenti nel blog **/
  public async getArticles(): Promise<Article[]> {

    let articlesList: Article[] = [];
    const getArticlesQuery = query(collection(db, environment.endpoint.blog.articoli), limit(3));
    const querySnapshot = await getDocs(getArticlesQuery);
    querySnapshot.forEach((doc) => {
      let article = ArticleFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      article.imagePathFromStorage = this.afStorage.ref(article.imagePath).getDownloadURL();
      articlesList.push(article);
    });
    return articlesList;

  }

}
