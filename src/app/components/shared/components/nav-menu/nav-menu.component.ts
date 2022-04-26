import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  /** Identifica se il sidebar è aperto o chiuso */
  isSidebarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  /** Metodo che gestisce l'apertura e la chiusura del sidebar */
  public toggleNav() {

    this.isSidebarOpen = !this.isSidebarOpen;
    let mySidebar = document?.getElementById("mySidebar");
    let main = document?.getElementById("main");

    if (this.isSidebarOpen) {

      if (mySidebar != null) {
        mySidebar.style.width = "250px";
      }

      if (main != null) {
        main.style.marginLeft = "250px";
      }

    } else {

      if (mySidebar != null) {
        mySidebar.style.width = "0";
      }

      if (main != null) {
        main.style.marginLeft = "0";
      }

    }




  }

  /** Metodo che chiude il navbar */
  public closeNav() {
    let mySidebar = document?.getElementById("mySidebar");
    let main = document?.getElementById("main");

    if (mySidebar != null) {
      mySidebar.style.width = "0";
    }

    if (main != null) {
      main.style.marginLeft = "0";
    }
  }

}
