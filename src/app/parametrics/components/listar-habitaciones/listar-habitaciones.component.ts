import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ConfirmationService, SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Habitacion } from '../../models/habitacion';
import { HabitacionService } from '../../services/habitacion.service';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-listar-habitaciones',
  templateUrl: './listar-habitaciones.component.html',
  styleUrls: ['./listar-habitaciones.component.scss'],

})

export class ListarHabitacionesComponent implements OnInit {

  displayform: boolean = false;
  editar: boolean = false;

  first = 0;
  rows = 10;
  getID = 0;
  TiposdeHabitaciones: SelectItem[] = [];
  Habitaciones: Habitacion[] = [];
  Habitacion: Habitacion = {

    num_habitacion: 0,
    id_tipo_habitacion: 0
  };

  constructor(private habitacionService: HabitacionService, private mensaje: MessageService) { }

  ngOnInit(): void {
    this.CargarHabitacion();
  }

  LimpiarFormulario() {
    this.editar = false,
      this.Habitacion = { num_habitacion: 0, id_tipo_habitacion: 0 }
  }

  CrearHabitacion() {
    this.LimpiarFormulario();
    this.displayform = true;
  }

  async CargarHabitacion() {

    try {
      const tipos = await this.habitacionService.getTiposHabitaciones()
      for (let tipo of tipos) {
        this.TiposdeHabitaciones.push({
          label: tipo.nom_tipo_habitacion,
          value: tipo.id_tipo_habitacion,
        })
      }
      this.Habitaciones = await this.habitacionService.getHabitaciones()
    } catch (error) {
      console.log(error)
    }
  }

  getNomTipo(id_tipo_habitacion) {
    const tipo = this.TiposdeHabitaciones.find(tipo => tipo.value == id_tipo_habitacion)
    return tipo.label
  }

  EditarHabitacion(Habitacion: Habitacion) {
    this.Habitacion = { ...Habitacion }
    this.getID = this.Habitacion.id_habitacion;
    this.editar = true;
    this.displayform = true;
  }
  async Enviar() {
    try {
      let data
      let formValido: boolean = (this.Habitacion.num_habitacion > 0 && this.Habitacion.id_tipo_habitacion > 0);

      if (!this.editar) {
        if (formValido) {
          data = await this.habitacionService.CrearHabitacion(this.Habitacion)
          this.Habitaciones.unshift(data)
          this.mensaje.add({ severity: 'success', summary: 'HABITACION CREADA', detail: 'La habitacion se creo correctamente', life: 3000 });
          this.displayform = false;
        } else {
          this.mensaje.add({severity:'warn', summary: 'PRECAUCIÓN', detail: 'Campos Vacios'});
        }
      } else {
        if (formValido) {
        data = await this.habitacionService.EditarHabitacion(this.getID, this.Habitacion)
        this.Habitaciones = this.Habitaciones.map(habit => habit.id_habitacion == data.id_habitacion ? data : habit)
        this.mensaje.add({ severity: 'success', summary: 'HABITACION EDITADA', detail: 'La habitacion se editó correctamente', life: 3000 });
        this.displayform = false;
      } else {
        this.mensaje.add({severity:'warn', summary: 'PRECAUCIÓN', detail: 'Campos Vacios'});
      }
      }
      
    } catch (error) {
      this.mensaje.add({ severity: 'error', summary: 'Error', detail: error.error, life: 4000 });
    }
  }

  async EliminarHabitacion(Habitacion: Habitacion) {
    try {
      const data = await this.habitacionService.EliminarHabitacion(Habitacion.id_habitacion)
      this.Habitaciones = this.Habitaciones.filter(val => val.id_habitacion !== Habitacion.id_habitacion)
      this.displayform = false;
      this.mensaje.add({ severity: 'success', summary: 'Elminado Correctamente', detail: 'La habitacion se eliminó correctamente', life: 3000 });
    } catch (error) {
      this.mensaje.add({ severity: 'error', summary: 'Error al Eliminar', detail: error.error, life: 4000 });
    }
  }


  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.Habitaciones ? this.first === (this.Habitaciones.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.Habitaciones ? this.first === 0 : true;
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

}
