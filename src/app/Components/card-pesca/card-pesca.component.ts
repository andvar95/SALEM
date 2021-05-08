import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pesca',
  templateUrl: './card-pesca.component.html',
  styleUrls: ['./card-pesca.component.css']
})
export class CardPescaComponent implements OnInit {

  constructor() { }
  @Input() data:any=[];

  ngOnInit(): void {
  }

}
