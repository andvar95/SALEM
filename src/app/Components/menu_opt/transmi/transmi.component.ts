import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transmi',
  templateUrl: './transmi.component.html',
  styleUrls: ['./transmi.component.css']
})
export class TransmiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(){
    window.open("https://www.facebook.com/Iglesia-Centro-Cristiano-Salem-Sincelejo-111828500444787")
  }
}
