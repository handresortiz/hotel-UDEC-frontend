import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'detalle-habitacion', component: DetallesHabitacionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
