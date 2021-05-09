import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  WHATSAPP_API_URL = `https://api.whatsapp.com/send?phone=+573017273110&text=Cuéntanos%20tu%20petición`;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll(event:any){
    let scrollOffset = event.srcElement.scrollingElement.scrollTop;
   

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

  sendWhatsappMsj(){
    window.open(this.WHATSAPP_API_URL)
  }

}


