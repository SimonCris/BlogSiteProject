import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from "../../../../main";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

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

  public async getUsersTest() {

    let array: any = [];

    const querySnapshot = await getDocs(collection(db, "/blog/media/articoli"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });

    return array;

  }
}
