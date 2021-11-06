import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';


@NgModule({
  declarations: [DetallesHabitacionComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
