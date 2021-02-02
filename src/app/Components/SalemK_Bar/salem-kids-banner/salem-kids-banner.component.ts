import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';



@Component({
  selector: 'app-salem-kids-banner',
  templateUrl: './salem-kids-banner.component.html',
  styleUrls: ['./salem-kids-banner.component.css']
})
export class SalemKidsBannerComponent implements OnInit {
  @ViewChild(FBVideoComponent) video: any;
  constructor(private fb: FacebookService) { }

  ngOnInit(): void {
  }
  gotoFacebook(){
    window.open('https://www.facebook.com/SalemKidsSincelejo');
  }

  playVideo() {
    this.video.play();
  }

  onVideoEvent(ev:any) {
    console.log('Video event fired: ' + ev);
  }
  
   onVideoPaused(ev: any) {
    console.log('User paused the video');
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
}
