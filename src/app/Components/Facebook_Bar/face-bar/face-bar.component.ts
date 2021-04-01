import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent ,InitParams} from 'ngx-facebook';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-face-bar',
  templateUrl: './face-bar.component.html',
  styleUrls: ['./face-bar.component.css']
})
export class FaceBarComponent implements OnInit {
  @ViewChild(FBVideoComponent) video: any;
  htmlFace:string="";
    div:string[]=[];
    div2:string[]=[];
    link_Vivo:string = "";
    estado:string = "";
  constructor( private fb: FacebookService, private sanitizer:DomSanitizer) {

     
    

    const initParams: InitParams = {
      appId: '254094169560540',
      cookie     : true,
      xfbml      : true,
      version: 'v10.0'
    };

    fb.init(initParams)
  
    fb.getLoginStatus().then((res:any)=>console.log(res))

  
  


   }




   playVideo() {
    this.video.play();
  }

  onVideoEvent(ev:any) {
    console.log('Video event fired: ' + ev);
  }

  pauseVideo() {
    this.video.pause();
  }

    /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error:any) {
    console.error('Error processing action', error);
  }




   onVideoPaused(ev: any) {
    console.log('User paused the video');
  }
  ngOnInit(): void {
  
  


    
//?access_token=EAADnGOi3VdwBADCJ5YuAH8FACq6B68cnkRMbsgcZBEuwmkLz6wIaVbWSQ5avrZBSz5jGl8cI43ZAactrHzInBoDKe78DSqvQda2bGG9F2lENyZAHzcQHPUlIwrnygofCVLSjl3VSzDNoZCvryEis386A9SYy5EbMZD
    this.fb.api('/111828500444787/live_videos?access_token=EAADnGOi3VdwBADCJ5YuAH8FACq6B68cnkRMbsgcZBEuwmkLz6wIaVbWSQ5avrZBSz5jGl8cI43ZAactrHzInBoDKe78DSqvQda2bGG9F2lENyZAHzcQHPUlIwrnygofCVLSjl3VSzDNoZCvryEis386A9SYy5EbMZD','get')
    .then((res:any) =>{
      console.log(res)
      this.estado = res.data[1].status;
      console.log(res.data[1]);
      this.htmlFace = res.data[1].embed_html;
      this.div = this.htmlFace.split(" ");
      this.div2= this.div[1].split('"');
      this.link_Vivo =this.div2[1];
      console.log("url "+this.link_Vivo);
    
    })
    .catch(e => console.log(e));
  
    
  }

  goToPage(){
    window.open("https://www.facebook.com/Iglesia-Centro-Cristiano-Salem-Sincelejo-111828500444787")
  }
}
