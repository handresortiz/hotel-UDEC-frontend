import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TipoHabitacion } from '../../models/tipohabitacion';
import { CatalogFilter, CatalogoService } from '../../services/catalogo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})

export class ReservarComponent implements OnInit {

  fec_inicio = new Date();
  fec_fin = new Date();
  fec_min = this.obtener_fecha_minima();
  fec_max = this.obtener_fecha_maxima();
  num_habitaciones: number = 1;
  num_adultos: number = 1;
  num_ninos: number = 0;
  tipos: TipoHabitacion[];

  constructor(
    private catalogoService: CatalogoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  obtener_fecha_minima() {
    return new Date(moment().add(1, 'd').format('YYYY-MM-DD'));
  }
  obtener_fecha_maxima() {
    return new Date(moment().add(12, 'months').format('YYYY-MM-DD'));
  }

  async handleClick() {
    const filtros: CatalogFilter = {
      fec_inicio: moment(this.fec_inicio).format('YYYY-MM-DD'),
      fec_fin: moment(this.fec_fin).format('YYYY-MM-DD'),
      num_habitaciones: this.num_habitaciones,
      num_adultos: this.num_adultos,
      num_ninos: this.num_ninos
    }
    try {
      this.tipos=await this.catalogoService.getCatalogo(filtros)
      console.log(this.tipos)
    } catch (ex) {
      console.log(ex)
    }
  }

  reservar(tipo: TipoHabitacion) {
    const reserva = {
      num_habitaciones:this.num_habitaciones ,
      num_adultos: this.num_adultos,
      num_ninos: this.num_ninos ,
      fecInicio: moment(this.fec_inicio).format('YYYY-MM-DD') ,
      fecFin: moment(this.fec_fin).format('YYYY-MM-DD') ,
      tipo
      
    }
    sessionStorage.setItem("reserva", JSON.stringify(reserva))
    this.router.navigate(['reservation/resumen-reserva'])
  }

}
