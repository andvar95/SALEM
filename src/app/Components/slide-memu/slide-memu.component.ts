import { Input } from '@angular/core';
import { Component, OnInit,Renderer2 } from '@angular/core';


@Component({
  selector: 'app-slide-memu',
  templateUrl: './slide-memu.component.html',
  styleUrls: ['./slide-memu.component.css']
})
export class SlideMemuComponent implements OnInit {
  constructor() { 

  }
  
  @Input()tipo: number=0;
  @Input()datos: any=[];
   opcion:number =0; 
  elementos:any = document.getElementsByClassName("elemento");


    change(n:number){
     
      this.opcion +=n;
    

       console.log(this.elementos);
      console.log(this.elementos.length);

      for(let i=0; i<this.elementos.length;i++){
          if(this.opcion>=this.elementos.length){
            this.opcion = 0; }
          else if (this.opcion<0){
            this.opcion = this.elementos.length-1;}
        if (i == this.opcion){
          this.elementos[i].style.display = "block"; 
          console.log("el"+this.elementos[i])
          
        }
        else{
          console.log("el"+this.elementos[i])
       this.elementos[i].style.display = "none"; }  
      }

    }
  

  


  ngOnInit(): void {
    //this.change(1);

    console.log(this.tipo,this.datos);
  }

  ngAfterViewInit():void{
    this.change(1);
  }



}
