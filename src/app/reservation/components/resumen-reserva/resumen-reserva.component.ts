import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TipoHabitacion } from '../../models/tipohabitacion';

import { Persona } from '../../models/persona'

import * as moment from 'moment'

import { ReservaForm, ReservaService } from '../../services/reserva.service'
import { ConfirmationService } from 'primeng/api';
import {Router} from '@angular/router'


@Component({
  selector: 'app-resumen-reserva',
  templateUrl: './resumen-reserva.component.html',
  styleUrls: ['./resumen-reserva.component.scss']
})
export class ResumenReservaComponent implements OnInit {
  blockSpecial: RegExp = /^[^<>*!]+$/;

  /* Extraccion datos BD y calculos*/
  tipoHabitacion: TipoHabitacion
  fechaInicio: string
  fechaFin: string
  numAdultos: number
  numNinos: number
  diasHosp: number
  precioNoche: number
  numHabitacion: number
  precioTotal: number

  /* Extracción datos InputText */
  cliente: Persona = {
    pri_nombre: "",
    seg_nombre: "",
    pri_apellido: "",
    seg_apellido: "",
    telefono: "",
    correo: "",
    identificacion: 0
  }

  constructor(
    private reservaService: ReservaService,
    private confirmationService: ConfirmationService,
    private router:Router
  ) { }

  ngOnDestroy(){
    
  }

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem("reserva"))
    sessionStorage.clear()
    
    this.fechaInicio = data.fecInicio;
    this.fechaFin = data.fecFin;
    this.numAdultos = data.num_adultos;
    this.numNinos = data.num_ninos;
    this.tipoHabitacion = data.tipo;
    this.diasHosp = this.calcDias();
    this.precioNoche = data.tipo.precio_habitacion;
    this.numHabitacion = data.num_habitaciones;
    this.precioTotal = this.calcPrec();
  }

  irCatalogo(){
    setTimeout(() => {
      this.router.navigate(['reservation/reserve-ahora'])
    }, 200);
  }

  async reservar() {
    const reserva: ReservaForm = {
      fec_inicio: this.fechaInicio,
      fec_fin: this.fechaFin,
      cliente: this.cliente,
      id_habitaciones: this.obtenerIdHabitaciones()
    }
    try {
      const data = await this.reservaService.registrarReserva(reserva)
      this.confirmationService.confirm({
        message: "La reserva ha sido registrada exitosamente",
        reject: () => {
        this.irCatalogo()
        },
        accept: () => {
          this.irCatalogo()
        }
      })


    } catch (ex) {
      this.confirmationService.confirm({
        message: ex.error.reduce((acum, err) => acum + '<br/>' + err),
        reject: () => { },
        accept: () => { }
      })
    }
  }

  obtenerIdHabitaciones() {
    let ids = []
    const habitaciones = this.tipoHabitacion.habitaciones
    for (let i = 0; i < this.numHabitacion; i++) {
      ids.push(habitaciones[i].id_habitacion)
    }
    return ids
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Esta seguro de realizar la reserva?',
      accept: () => {
        this.reservar()
      },
      reject: () => { }
    });
  }

  calcDias() {
    if(this.fechaFin == this.fechaInicio){
      return 1
    }else{
      return moment(new Date(this.fechaFin)).diff(moment(new Date(this.fechaInicio)), 'days')
    }
    
  }

  calcPrec() {
    return this.precioNoche * this.diasHosp * this.numHabitacion
  }

}

