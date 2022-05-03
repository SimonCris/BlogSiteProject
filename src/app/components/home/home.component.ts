import { Component, OnInit } from '@angular/core';
import {HomeService} from "./services/home.service";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: any;
  // uploadProgress: Observable<number>;

  constructor(private homeService: HomeService,
              private afStorage: AngularFireStorage) { }

  ngOnInit(): void {

    // this code returns the download url of image
    // this.downloadURL = this.afStorage.ref('/images/testImages').getDownloadURL();}

    /**this.homeService.getUsersTest().then(resp => {
      alert(JSON.stringify(resp));
    })
      .catch(error => {

    });*/

  }

  // function to upload file
  upload = (event: any) => {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref('/images/' + 'testImages');
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);

    // AngularFireUploadTask provides observable
    // to get uploadProgress value
    /**this.uploadProgress = this.task.snapshotChanges()
      .pipe(map(s => {
        return !!s ? (s.bytesTransferred / s.totalBytes) * 100 : null;
      }));*/

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();
        alert(this.downloadURL);
      })
    )
      .subscribe();

  };

}
