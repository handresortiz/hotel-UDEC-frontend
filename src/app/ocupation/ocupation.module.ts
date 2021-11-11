import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";

import { OcupationRoutingModule } from './ocupation-routing.module';
import { DetalleHabitacionComponent } from "./detalle-habitacion/detalle-habitacion.component";
import { HabitacionEditStatusComponent } from "./habitacion-edit-status/habitacion-edit-status.component";
import { HabitacionesComponent } from "./habitaciones/habitaciones.component";
import { ReservasComponent } from "./reservas/reservas.component";
import { ReservasClienteComponent } from "./reservas-cliente/reservas-cliente.component";
import { ReservaService } from './reservas/reserva.service';
import { ReservasClienteService } from './reservas-cliente/reservas-cliente.service';
import { DetalleHabitacionService } from './detalle-habitacion/detalle-habitacion.service';
import { HabitacionEditStatusService } from './habitacion-edit-status/habitacion-edit-status.service';
import { HabitacionService } from './habitaciones/habitacion.service';
@NgModule({
  declarations: [
     DetalleHabitacionComponent, 
     HabitacionEditStatusComponent,
     HabitacionesComponent,
     ReservasComponent,
     ReservasClienteComponent
    ],
  imports: [
    CommonModule,
    OcupationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ReservaService,
  ReservasClienteService,
  DetalleHabitacionService,
  HabitacionEditStatusService,
  HabitacionService
  ]
})
export class OcupationModule { }
