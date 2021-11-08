import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TipoHabitacion } from '../../models/tipohabitacion';
import { DetallesHabitacionComponent } from '../detalles-habitacion/detalles-habitacion.component';

@Component({
  selector: 'app-tarjeta-habitacion',
  templateUrl: './tarjeta-habitacion.component.html',
  styleUrls: ['./tarjeta-habitacion.component.scss']
})
export class TarjetaHabitacionComponent implements OnInit {
  ref?: DynamicDialogRef


  @Input() tipo: TipoHabitacion
  @Output() removeEvent: EventEmitter<TipoHabitacion>
  constructor(
    private dialogService: DialogService
    
  ) {

    this.removeEvent = new EventEmitter<TipoHabitacion>()
  }

  ngOnInit(): void {

  }
  show_details(tipo: TipoHabitacion) {
    this.ref = this.dialogService.open(DetallesHabitacionComponent, {
      header: 'Detalle de la habitación',
      width: '90%',
      height: '90%',
      data: tipo
    })
  }
  reservar(tipo: TipoHabitacion) {
    this.removeEvent.emit( tipo )
  }
}
