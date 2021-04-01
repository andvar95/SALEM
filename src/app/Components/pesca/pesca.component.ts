import { Component, OnInit } from '@angular/core';
import { PESCA} from '../../../assets/back_info/propositos';

@Component({
  selector: 'app-pesca',
  templateUrl: './pesca.component.html',
  styleUrls: ['./pesca.component.css']
})
export class PESCAComponent implements OnInit {

  constructor() { }
  propositos:any = PESCA
  tipo:number = 2

  ngOnInit(): void {
  }

}
