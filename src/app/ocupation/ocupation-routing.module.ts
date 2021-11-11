import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasClienteComponent } from './reservas-cliente/reservas-cliente.component';
import { ReservasComponent } from './reservas/reservas.component';
import { HabitacionEditStatusComponent } from './habitacion-edit-status/habitacion-edit-status.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DetalleHabitacionComponent } from "./detalle-habitacion/detalle-habitacion.component";


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'habitaciones', component: HabitacionesComponent},
      { path: 'habitaciones/:id', component: HabitacionEditStatusComponent},
      { path: 'reservas', component: ReservasComponent},
      { path: 'reservas/:idCedula', component: ReservasClienteComponent},
      { path: 'habitacion/detalle/:id', component: DetalleHabitacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcupationRoutingModule { }
