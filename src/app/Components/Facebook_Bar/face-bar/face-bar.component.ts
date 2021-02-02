import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';



@Component({
  selector: 'app-face-bar',
  templateUrl: './face-bar.component.html',
  styleUrls: ['./face-bar.component.css']
})
export class FaceBarComponent implements OnInit {
  @ViewChild(FBVideoComponent) video: any;
  constructor( private fb: FacebookService) {
    
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
  }

  goToPage(){
    window.open("https://www.facebook.com/Iglesia-Centro-Cristiano-Salem-Sincelejo-111828500444787")
  }
}
