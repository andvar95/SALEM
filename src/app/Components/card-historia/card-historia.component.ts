import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-historia',
  templateUrl: './card-historia.component.html',
  styleUrls: ['./card-historia.component.css']
})
export class CardHistoriaComponent implements OnInit {

  constructor() { }
  @Input() data:any=[];

  ngOnInit(): void {
  }

}
