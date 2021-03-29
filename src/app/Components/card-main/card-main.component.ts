import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  @Input() data:any=[];

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.data)
  }

}
