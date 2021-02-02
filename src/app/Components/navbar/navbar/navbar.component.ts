import { Component, OnInit } from '@angular/core';
import{timer} from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cultos:boolean = false;
  ministerios:boolean = false;
  
  constructor() { }

  
  ngOnInit(): void {
  }

  mostrarcultos(){this.cultos = true; this.ministerios = false;}
  quitarcultos(){this.cultos = false;}
  mostrarmin(){this.ministerios = true; this.cultos = false;}
  quitarmin(){this.ministerios = false;}

}
