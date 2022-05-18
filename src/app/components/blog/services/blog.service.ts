import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Photo, PhotoFactory} from "../../../data-model/classes/Photo";
import {environment} from "../../../../environments/environment";
import {db} from "../../../../main";
import { query, where, orderBy, limit } from "firebase/firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {Video, VideoFactory} from "../../../data-model/classes/Video";


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

}
