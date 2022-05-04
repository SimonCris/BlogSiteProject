import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {}

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
