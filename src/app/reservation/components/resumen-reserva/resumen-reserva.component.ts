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
    this.metodoPrueba();
    const data = JSON.parse(sessionStorage.getItem("reserva"))
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
      this.router.navigate(['reservation/catalogo'])
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

  metodoPrueba() {
    const reserva = {
      num_habitaciones: 1,
      fecInicio: "2021-11-08",
      fecFin: "2021-11-10",
      num_adultos: 2,
      num_ninos: 0,
      tipo: {
        id_tipo_habitacion: 1,
        nom_tipo_habitacion: "Clásica doble",
        desc_tipo_habitacion: "El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
        Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
        Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.\
        El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
        Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
        Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.\
        El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
        Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
        Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.",
        precio_habitacion: 160000,
        num_adultos: 2,
        num_ninos: 0,
        galeria: [
          {
            "id": 1,
            "url_imagen": "https://lasrosas.com/wp-content/uploads/revslider/habitaciones/habitaciones-lasrosas-ensenada-2.jpg"
          },
          {
            "id": 2,
            "url_imagen": "https://www.amarehotels.com/wp-content/uploads/2019/02/amare-marbella-habitaciones-oh-la%CC%80-la%CC%80-_theone_-vista-mar-frontal-hab-twin-21.jpg"
          },
          {
            "id": 3,
            "url_imagen": "https://www.hotel-atriumpalacebarcelona.com/wp-content/blogs.dir/576/files/dobleslider/hotel_atriumpalace_doble_5.jpg"
          }
        ],
        habitaciones: [
          { id_habitacion: 1, num_habitacion: 101 },
          { id_habitacion: 2, num_habitacion: 102 },
          { id_habitacion: 3, num_habitacion: 103 },
          { id_habitacion: 4, num_habitacion: 401 },
          { id_habitacion: 5, num_habitacion: 301 }
        ]
      }
    }
    sessionStorage.setItem("reserva", JSON.stringify(reserva))
  }

  calcDias() {
    return moment(this.fechaFin).diff(moment(this.fechaInicio), 'days')
  }

  calcPrec() {
    return this.precioNoche * this.diasHosp * this.numHabitacion
  }

}

