import { Component, HostListener, OnInit } from '@angular/core';
import {Route} from '@angular/router'

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  WHATSAPP_API_URL = `https://api.whatsapp.com/send?phone=+573017273110&text=Cuéntanos%20tu%20petición`;
  constructor() { }

  showSubMenu=(evt:any)=>{
    console.log(evt.srcElement.nextSibling)
    evt.srcElement.nextSibling.classList.toggle('active')
    evt.srcElement.nextSibling.classList.toggle('nav-sub') 
   
  }

  ngOnInit(): void {

  
  

    if (screen.width<=600){
      document.getElementsByName('nav-opt').forEach(el=>{
        console.log(el)
        el.addEventListener('click',this.showSubMenu)
      })

      document.querySelector('#nav')?.classList.remove('nav_color')
      document.querySelector('#nav')?.classList.remove('nav_transp')

    }
  }

  


  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll(event:any){
    let scrollOffset = event.srcElement.scrollingElement.scrollTop;
  

    if(scrollOffset>30 && screen.width>600){
      document.querySelector('#nav')?.classList.add('nav_color')
      document.querySelector('#nav')?.classList.remove('nav_transp')
 

    }
    else if (scrollOffset<=30 && screen.width>600){

      document.querySelector('#nav')?.classList.remove('nav_color')
      document.querySelector('#nav')?.classList.add('nav_transp')

  
    }
    

  }

  sendWhatsappMsj(){
    window.open(this.WHATSAPP_API_URL)
  }

}


