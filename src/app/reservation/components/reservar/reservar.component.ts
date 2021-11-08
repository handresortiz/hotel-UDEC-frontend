import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})

export class ReservarComponent implements OnInit {

//aqui poner los atributos xD
fec_inicio= new Date() ;
fec_fin= new Date() ;
num_adultos: number=1;
num_ninos: number=0;
handleClick() {

}

  constructor() {
   }

  ngOnInit(): void {
  }

}
