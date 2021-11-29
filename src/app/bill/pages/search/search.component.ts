import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FacturaService } from "../../services/factura.service";
import { Huespedes } from '../modelo/huespedes';
import { Personas } from '../modelo/personas';
import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  persona: Personas;
  huesped: Huespedes;

  identificacion: number;
  id: number;

  constructor( private facturaservice: FacturaService) { }
  date: any;
  ngOnInit(): void {
    this.date = moment(new Date()).format('D/MM/YY');
    console.log(moment(new Date()).format('D/MMMM/YYYY'));
  }

  buscar(identificacion: number){
    this.facturaservice.onSearch(identificacion)
    .subscribe( persona =>{
        this.persona = persona;
        console.log(persona);
    });
  }
  buscar2(id: number){
    this.facturaservice.busqueda(id)
    .subscribe( huesped =>{
        this.huesped = huesped;
        console.log(huesped);
    });
  }
  print() {
    window.print();
}

}
