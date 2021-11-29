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
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EstadiaComponent } from './estadia/estadia.component';
@NgModule({
  declarations: [
     DetalleHabitacionComponent, 
     HabitacionEditStatusComponent,
     HabitacionesComponent,
     ReservasComponent,
     ReservasClienteComponent,
     EstadiaComponent
    ],
  imports: [
    CommonModule,
    ListboxModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    OcupationRoutingModule,
    SplitButtonModule,
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    Ng2SearchPipeModule,
    SelectButtonModule,
    RadioButtonModule,
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
