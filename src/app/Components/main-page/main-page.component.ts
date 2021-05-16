import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  tipo:number = 0;
  datos:any = [
    {
     
      img:`./assets/img/presenciales.jpeg`,
  

    },
    {

      img:`./assets/img/presenciales.jpeg`,
      
    }

  ]

  ngOnInit(): void {
  }

}
