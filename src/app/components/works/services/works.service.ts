import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {db} from "../../../../main";
import {environment} from "../../../../environments/environment";
import { query, where, orderBy, limit } from "firebase/firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {GenericDoc, GenericDocFactory} from "../../../data-model/classes/GenericDoc";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private afStorage: AngularFireStorage) { }

  /** Servizio che recupera i media inseriti nella sezione Armocromia **/
  public async getArmocromiaList(): Promise<GenericDoc[]> {

    let armocromiaList: GenericDoc[] = [];
    const armocromiaListQuery = query(collection(db, environment.endpoint.works.armocromia));
    const querySnapshot = await getDocs(armocromiaListQuery);
    querySnapshot.forEach((doc) => {
      let armocromiaListFile = GenericDocFactory.getInstanceFromObject(doc.data());
      /** Recupera l'url dallo storage da usare nell'HTML*/
      armocromiaListFile.mediaPathFromStorage = this.afStorage.ref(armocromiaListFile.mediaPath).getDownloadURL();
      armocromiaList.push(armocromiaListFile);
    });
    return armocromiaList;

  }
}
