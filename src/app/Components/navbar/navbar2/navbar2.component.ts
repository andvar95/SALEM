import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll(event:any){
    let scrollOffset = event.srcElement.scrollingElement.scrollTop;
    console.log("scroll: ", scrollOffset);

    if(scrollOffset>30){
      document.querySelector('#nav')?.classList.add('nav_color')
      document.querySelector('#nav')?.classList.remove('nav_transp')
      document.querySelector("submenu")?.classList.remove("nav-sub")
    }
    else if (scrollOffset<30){

      document.querySelector('#nav')?.classList.remove('nav_color')
      document.querySelector('#nav')?.classList.add('nav_transp')
      document.querySelector("submenu")?.classList.add("nav-sub")
    }

  }
}


