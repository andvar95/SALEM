import { Component, OnInit } from '@angular/core';
import {Mision_Vision} from '../../../assets/back_info/Mision_Vision'
import { historiaSalem} from '../../../assets/back_info/Historia'


@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

  constructor() { }
   
  mision:String = Mision_Vision.mision
  vision:String = Mision_Vision.vision

  tipo:number = 1;
  datos_:any = historiaSalem

  ngOnInit(): void {
  }

}
