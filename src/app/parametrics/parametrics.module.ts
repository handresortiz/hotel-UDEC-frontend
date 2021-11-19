import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametricsRoutingModule } from './parametrics-routing.module';
import { TiposhabitacionesComponent } from './components/tiposhabitaciones/tiposhabitaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    TiposhabitacionesComponent,
    HabitacionesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ParametricsRoutingModule
  ]
})
export class ParametricsModule { }
