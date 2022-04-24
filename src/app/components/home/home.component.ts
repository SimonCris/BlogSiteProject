import { Component, OnInit } from '@angular/core';
import {db} from "../../../main";
import { addDoc, collection, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.addUserTest();
    // this.getUsersTest();

  }

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

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log('user -> ' + JSON.stringify(doc));
    });

  }

}
