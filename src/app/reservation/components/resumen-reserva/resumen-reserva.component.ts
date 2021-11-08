import { Component, Input, OnInit } from '@angular/core';
import { GalleriaThumbnails } from 'primeng/galleria';
import { TipoHabitacion } from '../../models/tipohabitacion';

import { Persona } from '../../models/persona'

import * as moment from 'moment'

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
  diasHosp: number
  precioNoche: number
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

  constructor() { }

  ngOnInit(): void {
    this.metodoPrueba();
    const data = JSON.parse(sessionStorage.getItem("reserva"))
    this.fechaInicio = data.fecInicio;
    this.fechaFin = data.fecFin;
    this.tipoHabitacion = data.tipo;
    this.diasHosp = this.calcDias();
    this.precioNoche = data.tipo.precio_habitacion;
    this.precioTotal = this.calcPrec();
  }

  metodoPrueba(){
    const reserva = {
      fecInicio: "2021-11-07",
      fecFin: "2021-11-10",
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
          { id_habitacion: 1, num_habitacion: 101 }
        ]
      }
    }
    sessionStorage.setItem("reserva", JSON.stringify(reserva))
  }

  calcDias(){
    return moment(this.fechaFin).diff(moment(this.fechaInicio), 'days')
  }

  calcPrec(){
    return this.precioNoche * this.diasHosp
  }

}
