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
      text:`Transmisiones de Facebook \n
           Domingo 9:00 am - 10:00 am`,
      img:`./assets/img/Facebook.png`,

    },
    {
      text:`Reuniones Presenciales \n
            Domingo 7:00 am - 8:00 am\n
            Domingo 9:00 am - 10:00 am`,
      img:`./assets/img/Facebook.png`,
      
    }

  ]

  ngOnInit(): void {
  }

}
